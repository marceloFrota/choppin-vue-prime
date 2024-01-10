<template>
  <div>
    <div class="grid p-fluid" ref="form">
    <Form class="col-12" :initial-values="product" :validation-schema="validationSchema_product" @submit.capture="onSubmit">







    <div class="field">
        <Field id="name" name="name" v-slot="{ handleChange, handleBlur }">
            <label for="name">Nome</label>
            <InputText type="text" 
                @change="handleChange"
                @blur="handleBlur"
                v-model="product.name" 
                class="input" 
            />
            
            <ErrorMessage class="p-error" name="name" />
        </Field>
    </div>






    <div class="field">
        <Field id="description" name="description" v-slot="{ handleChange, handleBlur }">
            <label for="description">Descrição</label>
            <InputText type="text" 
                @change="handleChange"
                @blur="handleBlur"
                v-model="product.description" 
                class="input" 
            />
            
            <ErrorMessage class="p-error" name="description" />
        </Field>
    </div>




 

    <div class="field">
        <Field id="price" name="price" v-slot="{ handleChange, handleBlur }">
            <label for="price">Preço</label>
            <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model.lazy="product.price" 
                  v-money3="moneyConfig"
                  class="input" 
              />
            <ErrorMessage class="p-error" name="price" />
        </Field>
    </div>







    <div class="field">
        <Field id="image" name="image" v-slot="{ handleChange, handleBlur }">
            <label for="image">Imagem</label>
            <InputText type="text" 
                @change="handleChange"
                @blur="handleBlur"
                v-model="product.image" 
                class="input" 
            />
            
            <ErrorMessage class="p-error" name="image" />
        </Field>
    </div>


 

    <div class="field">
        <Field id="id_product_category" name="id_product_category" v-slot="{ handleChange, handleBlur }">
            <label for="id_product_category">Categoria</label>
            <Dropdown 
                v-model="product.id_product_category" 
                :options="product_category_data" 
                optionLabel="name" 
                optionValue="id" 
                placeholder="Selecione Categoria" 
                class="w-full" 
            />
            <ErrorMessage class="p-error" name="id_product_category" />
        </Field>
    </div>



 

    <div class="field">
        <Field id="id_product_subcategory" name="id_product_subcategory" v-slot="{ handleChange, handleBlur }">
            <label for="id_product_subcategory">Subcategoria</label>
            <Dropdown 
                v-model="product.id_product_subcategory" 
                :options="product_subcategory_data" 
                optionLabel="name" 
                optionValue="id" 
                placeholder="Selecione Subcategoria" 
                class="w-full" 
            />
            <ErrorMessage class="p-error" name="id_product_subcategory" />
        </Field>
    </div>



        <Button type="submit" label="Salvar" />
    </Form>
    </div>
  </div>
</template>



<script>
import axios from 'axios';
import { useAppStore } from "@/store/store.js";
import { useForm, Field, Form, ErrorMessage, configure, validate } from 'vee-validate';
import * as zod from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import { unformat } from "v-money3";
import shared from '@/shared'

export default {
    name: 'Form_product',
    data(){
        return {
            isLoading: false,
            moneyConfig:shared.moneyConfig(),
            action: "POST",
            product: {
                id: null,
                created_at: null,
                updated_at: null,
                name: null,
                description: null,
                price: null,
                image: null,
                id_product_category: null,
                id_product_subcategory: null,
            },
            
            
        }
    },
    props: {
        record : Object,
        formAction : String,
    },
    components: { Field, Form, ErrorMessage },
    mounted(){
        if(this.formAction){
            this.action = this.formAction;
        }
        if(this.record){
            this.applyRecord();
        }
    },
    computed: {
        product_category_data() {
            const store = useAppStore();
            const data = store.product_category_data;
            return data;
        },
        product_subcategory_data() {
            const store = useAppStore();
            const data = store.product_subcategory_data;
            return data;
        },
    },
    methods: {
        applyRecord(){
            this.product = this.record;
        },
        scrollToElement(id) {
            this.$nextTick(() => {
                const element = this.$refs[id];
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            });
        },
        async save() {
            let url = `${BASE_API_URL}/product`;
            this.product.price = unformat(this.product.price, this.moneyConfig);
           
            this.isLoading = true;
            if(this.action == "PATCH"){
                url = url+'/'+this.record.id;
            }
            const config = {
                method: this.action,
                url: url,
                data: this.product,
            };
            await axios(config).then(response => {
                console.log(response);
                this.$emit('saved');
            }).catch(error => {
                console.error(error);
            }).finally(() => {
                this.isLoading = false;
            });
        },
        async onSubmit(values) {
            const validationErrors = await validate(this.product, this.validationSchema_product);
            if (validationErrors.valid) {
                this.save();
            } else {
                this.scrollToElement('form');
            }
        },
    },
    setup() {
        configure({
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true,
        });

        const validationSchema_product = toTypedSchema(
            zod.object({
                name: zod.string().optional().nullable(),
                description: zod.string().optional().nullable(),
                price: zod.string().optional().nullable(),
                image: zod.string().optional().nullable(),
                id_product_category: zod.number().optional().nullable(),
                id_product_subcategory: zod.number().optional().nullable(),
 
            })
        );

        return {
        validationSchema_product,
        };
    },
}
</script>
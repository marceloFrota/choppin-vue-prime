<template>
  <div>
    <div class="grid p-fluid" ref="form">
    <Form class="col-12" :initial-values="product_subcategory" :validation-schema="validationSchema_product_subcategory" @submit.capture="onSubmit">







    <div class="field">
        <Field id="name" name="name" v-slot="{ handleChange, handleBlur }">
            <label for="name">Nome</label>
            <InputText type="text" 
                @change="handleChange"
                @blur="handleBlur"
                v-model="product_subcategory.name" 
                class="input" 
            />
            
            <ErrorMessage class="p-error" name="name" />
        </Field>
    </div>


 

    <div class="field">
        <Field id="id_product_category" name="id_product_category" v-slot="{ handleChange, handleBlur }">
            <label for="id_product_category">Categoria</label>
            <Dropdown 
                v-model="product_subcategory.id_product_category" 
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
        <Field id="description" name="description" v-slot="{ handleChange, handleBlur }">
            <label for="description">Descrição</label>
            <InputText type="text" 
                @change="handleChange"
                @blur="handleBlur"
                v-model="product_subcategory.description" 
                class="input" 
            />
            
            <ErrorMessage class="p-error" name="description" />
        </Field>
    </div>






    <div class="field">
        <Field id="url_image" name="url_image" v-slot="{ handleChange, handleBlur }">
            <label for="url_image">Url da Imagem</label>
            <InputText type="text" 
                @change="handleChange"
                @blur="handleBlur"
                v-model="product_subcategory.url_image" 
                class="input" 
            />
            
            <ErrorMessage class="p-error" name="url_image" />
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
    name: 'Form_product_subcategory',
    data(){
        return {
            isLoading: false,
            moneyConfig:shared.moneyConfig(),
            action: "POST",
            product_subcategory: {
                id: null,
                created_at: null,
                updated_at: null,
                name: null,
                id_product_category: null,
                description: null,
                url_image: null,
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
    },
    methods: {
        applyRecord(){
            this.product_subcategory = this.record;
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
            let url = `${BASE_API_URL}/product_subcategory`;
           
            this.isLoading = true;
            if(this.action == "PATCH"){
                url = url+'/'+this.record.id;
            }
            const config = {
                method: this.action,
                url: url,
                data: this.product_subcategory,
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
            const validationErrors = await validate(this.product_subcategory, this.validationSchema_product_subcategory);
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

        const validationSchema_product_subcategory = toTypedSchema(
            zod.object({
                name: zod.string().optional().nullable(),
                id_product_category: zod.number().optional().nullable(),
                description: zod.string().optional().nullable(),
                url_image: zod.string().optional().nullable(),
 
            })
        );

        return {
        validationSchema_product_subcategory,
        };
    },
}
</script>
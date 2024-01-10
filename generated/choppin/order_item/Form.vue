<template>
  <div>
    <div class="grid p-fluid" ref="form">
    <Form class="col-12" :initial-values="order_item" :validation-schema="validationSchema_order_item" @submit.capture="onSubmit">



 

    <div class="field">
        <Field id="id_order" name="id_order" v-slot="{ handleChange, handleBlur }">
            <label for="id_order">Pedido</label>
            <Dropdown 
                v-model="order_item.id_order" 
                :options="order_data" 
                optionLabel="name" 
                optionValue="id" 
                placeholder="Selecione Pedido" 
                class="w-full" 
            />
            <ErrorMessage class="p-error" name="id_order" />
        </Field>
    </div>



 

    <div class="field">
        <Field id="id_product" name="id_product" v-slot="{ handleChange, handleBlur }">
            <label for="id_product">Produto</label>
            <Dropdown 
                v-model="order_item.id_product" 
                :options="product_data" 
                optionLabel="name" 
                optionValue="id" 
                placeholder="Selecione Produto" 
                class="w-full" 
            />
            <ErrorMessage class="p-error" name="id_product" />
        </Field>
    </div>





 

    <div class="field">
        <Field id="product_price" name="product_price" v-slot="{ handleChange, handleBlur }">
            <label for="product_price">Preço</label>
            <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model.lazy="order_item.product_price" 
                  v-money3="moneyConfig"
                  class="input" 
              />
            <ErrorMessage class="p-error" name="product_price" />
        </Field>
    </div>







    <div class="field">
        <Field id="quantity" name="quantity" v-slot="{ handleChange, handleBlur }">
            <label for="quantity">Quantidade</label>
            <InputText type="text" 
                @change="handleChange"
                @blur="handleBlur"
                v-model="order_item.quantity" 
                class="input" 
            />
            
            <ErrorMessage class="p-error" name="quantity" />
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
    name: 'Form_order_item',
    data(){
        return {
            isLoading: false,
            moneyConfig:shared.moneyConfig(),
            action: "POST",
            order_item: {
                id: null,
                created_at: null,
                updated_at: null,
                id_order: null,
                id_product: null,
                product_price: null,
                quantity: null,
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
        order_data() {
            const store = useAppStore();
            const data = store.order_data;
            return data;
        },
        product_data() {
            const store = useAppStore();
            const data = store.product_data;
            return data;
        },
    },
    methods: {
        applyRecord(){
            this.order_item = this.record;
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
            let url = `${BASE_API_URL}/order_item`;
            this.order_item.product_price = unformat(this.order_item.product_price, this.moneyConfig);
           
            this.isLoading = true;
            if(this.action == "PATCH"){
                url = url+'/'+this.record.id;
            }
            const config = {
                method: this.action,
                url: url,
                data: this.order_item,
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
            const validationErrors = await validate(this.order_item, this.validationSchema_order_item);
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

        const validationSchema_order_item = toTypedSchema(
            zod.object({
                id_order: zod.number().optional().nullable(),
                id_product: zod.number().optional().nullable(),
                product_price: zod.string().optional().nullable(),
                quantity: zod.string().optional().nullable(),
 
            })
        );

        return {
        validationSchema_order_item,
        };
    },
}
</script>
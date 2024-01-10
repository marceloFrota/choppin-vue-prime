<template>
  <div>
    <div class="grid p-fluid" ref="form">
    <Form class="col-12" :initial-values="stock" :validation-schema="validationSchema_stock" @submit.capture="onSubmit">



 

    <div class="field">
        <Field id="id_product" name="id_product" v-slot="{ handleChange, handleBlur }">
            <label for="id_product">Produto</label>
            <Dropdown 
                v-model="stock.id_product" 
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
        <Field id="type" name="type" v-slot="{ handleChange, handleBlur }">
            <label for="type">Tipo de movimentação</label>
            <InputText type="text" 
                @change="handleChange"
                @blur="handleBlur"
                v-model="stock.type" 
                class="input" 
            />
            
            <ErrorMessage class="p-error" name="type" />
        </Field>
    </div>






    <div class="field">
        <Field id="movement_at" name="movement_at" v-slot="{ handleChange, handleBlur }">
            <label for="movement_at">Data de movimentação</label>
            <InputText type="date" 
                @change="handleChange"
                @blur="handleBlur"
                v-model="stock.movement_at" 
                class="input" 
            />
            
            <ErrorMessage class="p-error" name="movement_at" />
        </Field>
    </div>






    <div class="field">
        <Field id="quantity" name="quantity" v-slot="{ handleChange, handleBlur }">
            <label for="quantity">Quantidade</label>
            <InputText type="text" 
                @change="handleChange"
                @blur="handleBlur"
                v-model="stock.quantity" 
                class="input" 
            />
            
            <ErrorMessage class="p-error" name="quantity" />
        </Field>
    </div>






    <div class="field">
        <Field id="batch" name="batch" v-slot="{ handleChange, handleBlur }">
            <label for="batch">Lote</label>
            <InputText type="text" 
                @change="handleChange"
                @blur="handleBlur"
                v-model="stock.batch" 
                class="input" 
            />
            
            <ErrorMessage class="p-error" name="batch" />
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
    name: 'Form_stock',
    data(){
        return {
            isLoading: false,
            moneyConfig:shared.moneyConfig(),
            action: "POST",
            stock: {
                id: null,
                created_at: null,
                updated_at: null,
                id_product: null,
                type: null,
                movement_at: null,
                quantity: null,
                batch: null,
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
        product_data() {
            const store = useAppStore();
            const data = store.product_data;
            return data;
        },
    },
    methods: {
        applyRecord(){
            this.stock = this.record;
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
            let url = `${BASE_API_URL}/stock`;
           
            this.isLoading = true;
            if(this.action == "PATCH"){
                url = url+'/'+this.record.id;
            }
            const config = {
                method: this.action,
                url: url,
                data: this.stock,
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
            const validationErrors = await validate(this.stock, this.validationSchema_stock);
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

        const validationSchema_stock = toTypedSchema(
            zod.object({
                id_product: zod.number().optional().nullable(),
                type: zod.string().optional().nullable(),
                movement_at: zod.string().optional().nullable(),
                quantity: zod.string().optional().nullable(),
                batch: zod.string().optional().nullable(),
 
            })
        );

        return {
        validationSchema_stock,
        };
    },
}
</script>
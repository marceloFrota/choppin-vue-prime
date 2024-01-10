<template>
  <div>
    <div class="grid p-fluid" ref="form">
    <Form class="col-12" :initial-values="order_status" :validation-schema="validationSchema_order_status" @submit.capture="onSubmit">



 

    <div class="field">
        <Field id="id_order" name="id_order" v-slot="{ handleChange, handleBlur }">
            <label for="id_order">Pedido</label>
            <Dropdown 
                v-model="order_status.id_order" 
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
        <Field id="status" name="status" v-slot="{ handleChange, handleBlur }">
            <label for="status">Status</label>
            <InputText type="text" 
                @change="handleChange"
                @blur="handleBlur"
                v-model="order_status.status" 
                class="input" 
            />
            
            <ErrorMessage class="p-error" name="status" />
        </Field>
    </div>






    <div class="field">
        <Field id="agent" name="agent" v-slot="{ handleChange, handleBlur }">
            <label for="agent">Agente</label>
            <InputText type="text" 
                @change="handleChange"
                @blur="handleBlur"
                v-model="order_status.agent" 
                class="input" 
            />
            
            <ErrorMessage class="p-error" name="agent" />
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
    name: 'Form_order_status',
    data(){
        return {
            isLoading: false,
            moneyConfig:shared.moneyConfig(),
            action: "POST",
            order_status: {
                id: null,
                created_at: null,
                updated_at: null,
                id_order: null,
                status: null,
                agent: null,
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
    },
    methods: {
        applyRecord(){
            this.order_status = this.record;
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
            let url = `${BASE_API_URL}/order_status`;
           
            this.isLoading = true;
            if(this.action == "PATCH"){
                url = url+'/'+this.record.id;
            }
            const config = {
                method: this.action,
                url: url,
                data: this.order_status,
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
            const validationErrors = await validate(this.order_status, this.validationSchema_order_status);
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

        const validationSchema_order_status = toTypedSchema(
            zod.object({
                id_order: zod.number().optional().nullable(),
                status: zod.string().optional().nullable(),
                agent: zod.string().optional().nullable(),
 
            })
        );

        return {
        validationSchema_order_status,
        };
    },
}
</script>
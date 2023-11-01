<template>
    <div>
        <div class="grid p-fluid" ref="form">
            <Form class="col-12" :initial-values="order" :validation-schema="validationSchema_order" @submit.capture="onSubmit">
                <div class="field">
                    <Field id="total_price" name="total_price" v-slot="{ handleChange, handleBlur }">
                        <label for="total_price">Preço Total</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="order.total_price" class="input" />

                        <ErrorMessage class="p-error" name="total_price" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="id_customer" name="id_customer" v-slot="{ handleChange, handleBlur }">
                        <label for="id_customer">Cliente</label>
                        <Dropdown v-model="order.id_customer" :options="customer_data" optionLabel="name" optionValue="id" placeholder="Selecione Cliente" class="w-full" />
                        <ErrorMessage class="p-error" name="id_customer" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="id_partner" name="id_partner" v-slot="{ handleChange, handleBlur }">
                        <label for="id_partner">Parceiro</label>
                        <Dropdown v-model="order.id_partner" :options="partner_data" optionLabel="name" optionValue="id" placeholder="Selecione Parceiro" class="w-full" />
                        <ErrorMessage class="p-error" name="id_partner" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="eta" name="eta" v-slot="{ handleChange, handleBlur }">
                        <label for="eta">Tempo estimado de entrega</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="order.eta" class="input" />

                        <ErrorMessage class="p-error" name="eta" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="delivery_fee" name="delivery_fee" v-slot="{ handleChange, handleBlur }">
                        <label for="delivery_fee">Valor da entrega</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="order.delivery_fee" class="input" />

                        <ErrorMessage class="p-error" name="delivery_fee" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="status" name="status" v-slot="{ handleChange, handleBlur }">
                        <label for="status">Status</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="order.status" class="input" />

                        <ErrorMessage class="p-error" name="status" />
                    </Field>
                </div>

                <Button type="submit" label="Salvar" />
            </Form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { useAppStore } from '@/store/store.js';
import { useForm, Field, Form, ErrorMessage, configure, validate } from 'vee-validate';
import * as zod from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import { unformat } from 'v-money3';
import shared from '@/shared';

export default {
    name: 'Form_order',
    data() {
        return {
            isLoading: false,
            moneyConfig: shared.moneyConfig(),
            action: 'POST',
            order: {
                id: null,
                created_at: null,
                updated_at: null,
                total_price: null,
                id_customer: null,
                id_partner: null,
                eta: null,
                delivery_fee: null,
                status: null
            }
        };
    },
    props: {
        record: Object,
        formAction: String
    },
    components: { Field, Form, ErrorMessage },
    mounted() {
        if (this.formAction) {
            this.action = this.formAction;
        }
        if (this.record) {
            this.applyRecord();
        }
    },
    computed: {
        customer_data() {
            const store = useAppStore();
            const data = store.customer_data;
            return data;
        },
        partner_data() {
            const store = useAppStore();
            const data = store.partner_data;
            return data;
        }
    },
    methods: {
        applyRecord() {
            this.order = this.record;
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
            let url = `${BASE_API_URL}/order`;

            this.isLoading = true;
            if (this.action == 'PATCH') {
                url = url + '/' + this.record.id;
            }
            const config = {
                method: this.action,
                url: url,
                data: this.order
            };
            await axios(config)
                .then((response) => {
                    console.log(response);
                    this.$emit('saved');
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
        async onSubmit(values) {
            const validationErrors = await validate(this.order, this.validationSchema_order);
            if (validationErrors.valid) {
                this.save();
            } else {
                this.scrollToElement('form');
            }
        }
    },
    setup() {
        configure({
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true
        });

        const validationSchema_order = toTypedSchema(
            zod.object({
                total_price: zod.string().optional().nullable(),
                id_customer: zod.number().optional().nullable(),
                id_partner: zod.number().optional().nullable(),
                eta: zod.string().optional().nullable(),
                delivery_fee: zod.string().optional().nullable(),
                status: zod.string().optional().nullable()
            })
        );

        return {
            validationSchema_order
        };
    }
};
</script>

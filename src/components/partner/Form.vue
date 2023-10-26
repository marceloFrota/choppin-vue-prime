<template>
    <div>
        <h5>Cadastro de Parceiros</h5>
        <div class="grid p-fluid">
            <Form class="col-12" :validation-schema="validationSchema_partner" @submit="onSubmit">
                <div class="field">
                    <Field id="name" name="name" v-slot="{ handleChange, handleBlur }">
                        <label for="name">Nome</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="partner.name" class="input" />

                        <ErrorMessage name="name" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="email" name="email" v-slot="{ handleChange, handleBlur }">
                        <label for="email">Email</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="partner.email" class="input" />

                        <ErrorMessage name="email" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="phone_number" name="phone_number" v-slot="{ handleChange, handleBlur }">
                        <label for="phone_number">Número de telefone</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="partner.phone_number" class="input" />

                        <ErrorMessage name="phone_number" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="doc_cpf" name="doc_cpf" v-slot="{ handleChange, handleBlur }">
                        <label for="doc_cpf">CPF</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="partner.doc_cpf" class="input" />

                        <ErrorMessage name="doc_cpf" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="date_of_birth" name="date_of_birth" v-slot="{ handleChange, handleBlur }">
                        <label for="date_of_birth">Data de Nascimento</label>
                        <InputText type="date" @change="handleChange" @blur="handleBlur" v-model="partner.date_of_birth" class="input" />

                        <ErrorMessage name="date_of_birth" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="address_line_1" name="address_line_1" v-slot="{ handleChange, handleBlur }">
                        <label for="address_line_1">Endereço linha 1</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="partner.address_line_1" class="input" />

                        <ErrorMessage name="address_line_1" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="address_line_2" name="address_line_2" v-slot="{ handleChange, handleBlur }">
                        <label for="address_line_2">Endereço linha 2</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="partner.address_line_2" class="input" />

                        <ErrorMessage name="address_line_2" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="city" name="city" v-slot="{ handleChange, handleBlur }">
                        <label for="city">Cidade</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="partner.city" class="input" />

                        <ErrorMessage name="city" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="country" name="country" v-slot="{ handleChange, handleBlur }">
                        <label for="country">País</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="partner.country" class="input" />

                        <ErrorMessage name="country" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="state" name="state" v-slot="{ handleChange, handleBlur }">
                        <label for="state">Estado</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="partner.state" class="input" />

                        <ErrorMessage name="state" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="zip_code" name="zip_code" v-slot="{ handleChange, handleBlur }">
                        <label for="zip_code">CEP</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="partner.zip_code" class="input" />

                        <ErrorMessage name="zip_code" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="logo" name="logo" v-slot="{ handleChange, handleBlur }">
                        <label for="logo">Logo</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="partner.logo" class="input" />

                        <ErrorMessage name="logo" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="active" name="active" v-slot="{ handleChange, handleBlur }">
                        <label for="active">Ativo</label>
                        <InputText type="checkbox" @change="handleChange" @blur="handleBlur" v-model="partner.active" class="input" />

                        <ErrorMessage name="active" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="operating_hours" name="operating_hours" v-slot="{ handleChange, handleBlur }">
                        <label for="operating_hours">Horário de funcionamento</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="partner.operating_hours" class="input" />

                        <ErrorMessage name="operating_hours" />
                    </Field>
                </div>

                <Button type="submit" label="Salvar"></Button>
            </Form>
        </div>
    </div>
</template>

<script>
//import { useAppStore } from "@/store/store.js";
import { useForm, Field, Form, ErrorMessage, configure } from 'vee-validate';
import * as zod from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

export default {
    name: 'Form_partner',
    data() {
        return {
            isLoading: false,
            action: 'POST',
            partner: {
                id: null,
                created_at: null,
                updated_at: null,
                name: null,
                email: null,
                phone_number: null,
                doc_cpf: null,
                date_of_birth: null,
                address_line_1: null,
                address_line_2: null,
                city: null,
                country: null,
                state: null,
                zip_code: null,
                logo: null,
                active: null,
                operating_hours: null
            }
        };
    },
    props: {
        record: Object
    },
    components: { Field, Form, ErrorMessage },
    computed: {},
    methods: {
        async save() {
            this.isLoading = true;
            if (this.action == 'PATCH') {
                BASE_API_URL = BASE_API_URL + '/' + this.id;
            }
            const config = {
                method: this.action,
                url: `${BASE_API_URL}/partner`,
                data: this.partner
            };
            const response = await axios(config);
        },
        onSubmit(values) {
            this.$emit('saved');

            this.save(values);
        }
    },
    setup() {
        configure({
            validateOnBlur: true,
            validateOnChange: true,
            validateOnInput: false,
            validateOnModelUpdate: true
        });

        const validationSchema_partner = toTypedSchema(
            zod.object({
                name: zod.string().min(1),
                email: zod.string().email().min(1),
                phone_number: zod.string().optional(),
                doc_cpf: zod.string().optional(),
                date_of_birth: zod.string().optional(),
                address_line_1: zod.string().optional(),
                address_line_2: zod.string().optional(),
                city: zod.string().optional(),
                country: zod.string().optional(),
                state: zod.string().optional(),
                zip_code: zod.string().optional(),
                logo: zod.string().optional(),
                active: zod.boolean().optional(),
                operating_hours: zod.string().optional()
            })
        );

        return {
            validationSchema_partner
        };
    }
};
</script>

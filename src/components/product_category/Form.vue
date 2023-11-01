<template>
    <div>
        <div class="grid p-fluid" ref="form">
            <Form class="col-12" :initial-values="product_category" :validation-schema="validationSchema_product_category" @submit.capture="onSubmit">
                <div class="field">
                    <Field id="name" name="name" v-slot="{ handleChange, handleBlur }">
                        <label for="name">Nome</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="product_category.name" class="input" />

                        <ErrorMessage class="p-error" name="name" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="description" name="description" v-slot="{ handleChange, handleBlur }">
                        <label for="description">Descrição</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="product_category.description" class="input" />

                        <ErrorMessage class="p-error" name="description" />
                    </Field>
                </div>

                <div class="field">
                    <Field id="image_url" name="image_url" v-slot="{ handleChange, handleBlur }">
                        <label for="image_url">Url da Imagem</label>
                        <InputText type="text" @change="handleChange" @blur="handleBlur" v-model="product_category.image_url" class="input" />

                        <ErrorMessage class="p-error" name="image_url" />
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
    name: 'Form_product_category',
    data() {
        return {
            isLoading: false,
            moneyConfig: shared.moneyConfig(),
            action: 'POST',
            product_category: {
                id: null,
                created_at: null,
                updated_at: null,
                name: null,
                description: null,
                image_url: null
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
    computed: {},
    methods: {
        applyRecord() {
            this.product_category = this.record;
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
            let url = `${BASE_API_URL}/product_category`;

            this.isLoading = true;
            if (this.action == 'PATCH') {
                url = url + '/' + this.record.id;
            }
            const config = {
                method: this.action,
                url: url,
                data: this.product_category
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
            const validationErrors = await validate(this.product_category, this.validationSchema_product_category);
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

        const validationSchema_product_category = toTypedSchema(
            zod.object({
                name: zod.string().optional().nullable(),
                description: zod.string().optional().nullable(),
                image_url: zod.string().optional().nullable()
            })
        );

        return {
            validationSchema_product_category
        };
    }
};
</script>

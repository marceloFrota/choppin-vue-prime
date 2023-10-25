<template>
    <div class="card">

      <h1>Cadastro de Parceiros</h1>
  
      <Form :validation-schema="validationSchema_partner" @submit="onSubmit">
  
  
  
  
  
  
  
        <div class="field">
          <label for="firstname2">Nome</label>
          <Field name="name" v-slot="{ handleChange, handleBlur }">
          <InputText type="text" 
              name="name" 
              @change="handleChange"
              @blur="handleBlur"
              v-model="partner.name" 
              class="input" 
          />
          <ErrorMessage name="name" />
          </Field>
        </div>
  
  
  
  
  
  
        <div class="field">
          <label class="label">Email</label>
          <Field name="email" v-slot="{ handleChange, handleBlur }">
          <InputText type="text" 
              name="email" 
              @change="handleChange"
              @blur="handleBlur"
              v-model="partner.email" 
              class="input" 
          />
          <ErrorMessage name="email" />
          </Field>
        </div>
  
  
  
  
  
  
        <div class="field">
          <label class="label">Número de telefone</label>
          <Field name="phone_number" v-slot="{ handleChange, handleBlur }">
          <InputText type="text" 
              name="phone_number" 
              @change="handleChange"
              @blur="handleBlur"
              v-model="partner.phone_number" 
              class="input" 
          />
          <ErrorMessage name="phone_number" />
          </Field>
        </div>
  
  
  
  
  
  
        <div class="field">
          <label class="label">CPF</label>
          <Field name="doc_cpf" v-slot="{ handleChange, handleBlur }">
          <input type="text" 
              name="doc_cpf" 
              @change="handleChange"
              @blur="handleBlur"
              v-model="partner.doc_cpf" 
              class="input" 
          />
          <ErrorMessage name="doc_cpf" />
          </Field>
        </div>
  
  
  
  
  
  
        <div class="field">
          <label class="label">Data de Nascimento</label>
          <Field name="date_of_birth" v-slot="{ handleChange, handleBlur }">
          <input type="date" 
              name="date_of_birth" 
              @change="handleChange"
              @blur="handleBlur"
              v-model="partner.date_of_birth" 
              class="input" 
          />
          <ErrorMessage name="date_of_birth" />
          </Field>
        </div>
  
  
  
  
  
  
        <div class="field">
          <label class="label">Endereço linha 1</label>
          <Field name="address_line_1" v-slot="{ handleChange, handleBlur }">
          <input type="text" 
              name="address_line_1" 
              @change="handleChange"
              @blur="handleBlur"
              v-model="partner.address_line_1" 
              class="input" 
          />
          <ErrorMessage name="address_line_1" />
          </Field>
        </div>
  
  
  
  
  
  
        <div class="field">
          <label class="label">Endereço linha 2</label>
          <Field name="address_line_2" v-slot="{ handleChange, handleBlur }">
          <input type="text" 
              name="address_line_2" 
              @change="handleChange"
              @blur="handleBlur"
              v-model="partner.address_line_2" 
              class="input" 
          />
          <ErrorMessage name="address_line_2" />
          </Field>
        </div>
  
  
  
  
  
  
        <div class="field">
          <label class="label">Cidade</label>
          <Field name="city" v-slot="{ handleChange, handleBlur }">
          <input type="text" 
              name="city" 
              @change="handleChange"
              @blur="handleBlur"
              v-model="partner.city" 
              class="input" 
          />
          <ErrorMessage name="city" />
          </Field>
        </div>
  
  
  
  
  
  
        <div class="field">
          <label class="label">País</label>
          <Field name="country" v-slot="{ handleChange, handleBlur }">
          <input type="text" 
              name="country" 
              @change="handleChange"
              @blur="handleBlur"
              v-model="partner.country" 
              class="input" 
          />
          <ErrorMessage name="country" />
          </Field>
        </div>
  
  
  
  
  
  
        <div class="field">
          <label class="label">Estado</label>
          <Field name="state" v-slot="{ handleChange, handleBlur }">
          <input type="text" 
              name="state" 
              @change="handleChange"
              @blur="handleBlur"
              v-model="partner.state" 
              class="input" 
          />
          <ErrorMessage name="state" />
          </Field>
        </div>
  
  
  
  
  
  
        <div class="field">
          <label class="label">CEP</label>
          <Field name="zip_code" v-slot="{ handleChange, handleBlur }">
          <input type="text" 
              name="zip_code" 
              @change="handleChange"
              @blur="handleBlur"
              v-model="partner.zip_code" 
              class="input" 
          />
          <ErrorMessage name="zip_code" />
          </Field>
        </div>
  
  
  
  
  
  
        <div class="field">
          <label class="label">Logo</label>
          <Field name="logo" v-slot="{ handleChange, handleBlur }">
          <input type="text" 
              name="logo" 
              @change="handleChange"
              @blur="handleBlur"
              v-model="partner.logo" 
              class="input" 
          />
          <ErrorMessage name="logo" />
          </Field>
        </div>
  
  
  
  
  
  
        <div class="field">
          <label class="label">Ativo</label>
          <Field name="active" v-slot="{ handleChange, handleBlur }">
          <input type="checkbox" 
              name="active" 
              @change="handleChange"
              @blur="handleBlur"
              v-model="partner.active" 
              class="input" 
          />
          <ErrorMessage name="active" />
          </Field>
        </div>
  
  
  
  
  
  
        <div class="field">
          <label class="label">Horário de funcionamento</label>
          <Field name="operating_hours" v-slot="{ handleChange, handleBlur }">
          <input type="text" 
              name="operating_hours" 
              @change="handleChange"
              @blur="handleBlur"
              v-model="partner.operating_hours" 
              class="input" 
          />
          <ErrorMessage name="operating_hours" />
          </Field>
        </div>
  
  
        <button class="button is-primary">Salvar</button>
      </form>
    </div>
  </template>
  
  
  
  <script>
 
  import { useForm, Field, Form, ErrorMessage, configure } from 'vee-validate';
  import * as zod from 'zod';
  import { toTypedSchema } from '@vee-validate/zod';
 
  
  export default {
      name: 'Form_partner',
      data(){
          return {
              isLoading: false,
              action: "POST",
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
                  operating_hours: null,
              },
          }
      },
      props: {
          record : Object
      },
      components: { Field, Form, ErrorMessage },
      computed: {
      },
      methods: {
          async save() {
              this.isLoading = true;
              if(this.action == "PATCH"){
                  BASE_API_URL = BASE_API_URL+'/'+this.id;
              }
              const config = {
                  method: this.action,
                  url: `${BASE_API_URL}/partner`,
                  data: this.partner,
              };
              const response = await axios(config);
          },
          onSubmit(values) {
              this.save(values);
          },
      },
      setup() {
          configure({
          validateOnBlur: true,
          validateOnChange: true,
          validateOnInput: false,
          validateOnModelUpdate: true,
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
          operating_hours: zod.string().optional(),
   
          })
          );
  
          return {
          validationSchema_partner,
          };
      },
  }
  </script>
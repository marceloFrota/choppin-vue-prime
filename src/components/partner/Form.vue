<template>
    <div>
      <div class="grid p-fluid" ref="form">
      <Form class="col-12" :initial-values="partner" :validation-schema="validationSchema_partner" @submit.capture="onSubmit">
  
  
  
  
  
  
  
      <div class="field">
          <Field id="name" name="name" v-slot="{ handleChange, handleBlur }">
              <label for="name">Nome</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="partner.name" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="name" />
          </Field>
      </div>
  
  
  
  
  
  
      <div class="field">
          <Field id="email" name="email" v-slot="{ handleChange, handleBlur }">
              <label for="email">Email</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="partner.email" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="email" />
          </Field>
      </div>
  
  
  
  
  
  
      <div class="field">
          <Field id="phone_number" name="phone_number" v-slot="{ handleChange, handleBlur }">
              <label for="phone_number">Número de telefone</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="partner.phone_number" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="phone_number" />
          </Field>
      </div>
  
  
  
  
  
  
      <div class="field">
          <Field id="doc_cpf" name="doc_cpf" v-slot="{ handleChange, handleBlur }">
              <label for="doc_cpf">CPF</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="partner.doc_cpf" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="doc_cpf" />
          </Field>
      </div>
  
  
  
  
  
  
      <div class="field">
          <Field id="date_of_birth" name="date_of_birth" v-slot="{ handleChange, handleBlur }">
              <label for="date_of_birth">Data de Nascimento</label>
              <InputText type="date" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="partner.date_of_birth" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="date_of_birth" />
          </Field>
      </div>
  
  
  
  
  
  
      <div class="field">
          <Field id="address_line_1" name="address_line_1" v-slot="{ handleChange, handleBlur }">
              <label for="address_line_1">Endereço linha 1</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="partner.address_line_1" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="address_line_1" />
          </Field>
      </div>
  
  
  
  
  
  
      <div class="field">
          <Field id="address_line_2" name="address_line_2" v-slot="{ handleChange, handleBlur }">
              <label for="address_line_2">Endereço linha 2</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="partner.address_line_2" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="address_line_2" />
          </Field>
      </div>
  
  
  
  
  
  
      <div class="field">
          <Field id="city" name="city" v-slot="{ handleChange, handleBlur }">
              <label for="city">Cidade</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="partner.city" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="city" />
          </Field>
      </div>
  
  
  
  
  
  
      <div class="field">
          <Field id="country" name="country" v-slot="{ handleChange, handleBlur }">
              <label for="country">País</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="partner.country" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="country" />
          </Field>
      </div>
  
  
  
  
  
  
      <div class="field">
          <Field id="state" name="state" v-slot="{ handleChange, handleBlur }">
              <label for="state">Estado</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="partner.state" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="state" />
          </Field>
      </div>
  
  
  
  
  
  
      <div class="field">
          <Field id="zip_code" name="zip_code" v-slot="{ handleChange, handleBlur }">
              <label for="zip_code">CEP</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="partner.zip_code" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="zip_code" />
          </Field>
      </div>
  
  
  
  
  
  
      <div class="field">
          <Field id="logo" name="logo" v-slot="{ handleChange, handleBlur }">
              <label for="logo">Logo</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="partner.logo" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="logo" />
          </Field>
      </div>
  
  
  
  
  
   
      <div class="field">
          <Field id="active" name="active" v-slot="{ handleChange, handleBlur }">
              <label for="active">Ativo</label>
              <InputSwitch type="checkbox" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="partner.active" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="active" />
          </Field>
      </div>
  
  
  
  
  
  
      <div class="field">
          <Field id="operating_hours" name="operating_hours" v-slot="{ handleChange, handleBlur }">
              <label for="operating_hours">Horário de funcionamento</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="partner.operating_hours" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="operating_hours" />
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
      name: 'Form_partner',
      data(){
          return {
              isLoading: false,
              moneyConfig:shared.moneyConfig(),
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
      },
      methods: {
          applyRecord(){
              this.partner = this.record;
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
              let url = `${BASE_API_URL}/partner`;
             
              this.isLoading = true;
              if(this.action == "PATCH"){
                  url = url+'/'+this.record.id;
              }
              const config = {
                  method: this.action,
                  url: url,
                  data: this.partner,
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
              const validationErrors = await validate(this.partner, this.validationSchema_partner);
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
  
          const validationSchema_partner = toTypedSchema(
              zod.object({
                  name: zod.string().min(1),
                  email: zod.string().email().min(1),
                  phone_number: zod.string().optional().nullable(),
                  doc_cpf: zod.string().optional().nullable(),
                  date_of_birth: zod.string().optional().nullable(),
                  address_line_1: zod.string().optional().nullable(),
                  address_line_2: zod.string().optional().nullable(),
                  city: zod.string().optional().nullable(),
                  country: zod.string().optional().nullable(),
                  state: zod.string().optional().nullable(),
                  zip_code: zod.string().optional().nullable(),
                  logo: zod.string().optional().nullable(),
                  active: zod.boolean().optional().nullable(),
                  operating_hours: zod.string().optional().nullable(),
   
              })
          );
  
          return {
          validationSchema_partner,
          };
      },
  }
  </script>
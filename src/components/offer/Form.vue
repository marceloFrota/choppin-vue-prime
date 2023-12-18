<template>
    <div>
      <div class="grid p-fluid" ref="form">
      <Form class="col-12" :initial-values="offer" :validation-schema="validationSchema_offer" @submit.capture="onSubmit">
  
  
  
   
  
      <div class="field">
          <Field id="id_product" name="id_product" v-slot="{ handleChange, handleBlur }">
              <label for="id_product">Produto</label>
              <Dropdown 
                  v-model="offer.id_product" 
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
          <Field id="price" name="price" v-slot="{ handleChange, handleBlur }">
              <label for="price">Preço</label>
              <InputText type="text" 
                    @change="handleChange"
                    @blur="handleBlur"
                    v-model.lazy="offer.price" 
                    v-money3="moneyConfig"
                    class="input" 
                />
              <ErrorMessage class="p-error" name="price" />
          </Field>
      </div>
  
  
  
  
  
  
  
      <div class="field">
          <Field id="quantity" name="quantity" v-slot="{ handleChange, handleBlur }">
              <label for="quantity">Quantidade Limite</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="offer.quantity" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="quantity" />
          </Field>
      </div>
  
  
  
  
  
  
      <div class="field">
          <Field id="initial_date" name="initial_date" v-slot="{ handleChange, handleBlur }">
              <label for="initial_date">Data Inicial</label>
              <InputText type="date" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="offer.initial_date" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="initial_date" />
          </Field>
      </div>
  
  
  
  
  
  
      <div class="field">
          <Field id="final_date" name="final_date" v-slot="{ handleChange, handleBlur }">
              <label for="final_date">Data Final</label>
              <InputText type="date" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="offer.final_date" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="final_date" />
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
      name: 'Form_offer',
      data(){
          return {
              isLoading: false,
              moneyConfig:shared.moneyConfig(),
              action: "POST",
              offer: {
                  id: null,
                  created_at: null,
                  updated_at: null,
                  id_product: null,
                  price: null,
                  quantity: null,
                  initial_date: null,
                  final_date: null,
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
              this.offer = this.record;
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
              let url = `${BASE_API_URL}/offer`;
              this.offer.price = unformat(this.offer.price, this.moneyConfig);
             
              this.isLoading = true;
              if(this.action == "PATCH"){
                  url = url+'/'+this.record.id;
              }
              const config = {
                  method: this.action,
                  url: url,
                  data: this.offer,
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
              const validationErrors = await validate(this.offer, this.validationSchema_offer);
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
  
          const validationSchema_offer = toTypedSchema(
              zod.object({
                  id_product: zod.number().optional().nullable(),
                  price: zod.string().optional().nullable(),
                  quantity: zod.string().optional().nullable(),
                  initial_date: zod.string().optional().nullable(),
                  final_date: zod.string().optional().nullable(),
   
              })
          );
  
          return {
          validationSchema_offer,
          };
      },
  }
  </script>
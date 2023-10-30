<template>
    <div>
      <div class="grid p-fluid">
      <Form class="col-12" :validation-schema="validationSchema_product" @submit="onSubmit">
  
  
  
  
      <div class="field">
          <Field id="name" name="name" v-slot="{ handleChange, handleBlur }">
              <label for="name">Nome</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="product.name" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="name" />
          </Field>
      </div>
  
  
  
      <div class="field">
          <Field id="description" name="description" v-slot="{ handleChange, handleBlur }">
              <label for="description">Descrição</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="product.description" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="description" />
          </Field>
      </div>
  
  
  
      <div class="field">
          <Field id="price" name="price" v-slot="{ handleChange, handleBlur }">
              <label for="price">Preço</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model.lazy="product.price" 
                  v-money3="moneyConfig"
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="price" />
          </Field>
      </div>
  
  
  
      <div class="field">
          <Field id="image" name="image" v-slot="{ handleChange, handleBlur }">
              <label for="image">Imagem</label>
              <InputText type="text" 
                  @change="handleChange"
                  @blur="handleBlur"
                  v-model="product.image" 
                  class="input" 
              />
              
              <ErrorMessage class="p-error" name="image" />
          </Field>
      </div>
  
  
   
  
      <div class="field">
          <Field id="id_product_category" name="id_product_category" v-slot="{ handleChange, handleBlur }">
              <label for="id_product_category">Categoria</label>
              <Dropdown 
                  v-model="product.id_product_category" 
                  :options="product_category_data" 
                  optionLabel="name" 
                  optionValue="id" 
                  placeholder="Selecione Categoria" 
                  class="w-full md:w-14rem" 
              />
              <ErrorMessage class="p-error" name="id_product_category" />
          </Field>
      </div>
  
  
  
   
  
      <div class="field">
          <Field id="id_product_subcategory" name="id_product_subcategory" v-slot="{ handleChange, handleBlur }">
              <label for="id_product_subcategory">Subcategoria</label>
              <Dropdown 
                  v-model="product.id_product_subcategory" 
                  :options="product_subcategory_data" 
                  optionLabel="name" 
                  optionValue="id" 
                  placeholder="Selecione Subcategoria" 
                  class="w-full md:w-14rem" 
              />
              <ErrorMessage class="p-error" name="id_product_subcategory" />
          </Field>
      </div>
  
  
  
        <Button label="Salvar"></Button>
      </Form>
      </div>
    </div>
  </template>
  
  
  
  <script>
  import { useAppStore } from "@/store/store.js";
  import { useForm, Field, Form, ErrorMessage, configure } from 'vee-validate';
  import * as zod from 'zod';
  import { toTypedSchema } from '@vee-validate/zod';
  import { unformat } from "v-money3";
  import shared from '@/shared'

  export default {
      name: 'Form_product',
      data(){
          return {
              isLoading: false,
              moneyConfig:shared.moneyConfig(),
              action: "POST",
              product: {
                  id: null,
                  created_at: null,
                  updated_at: null,
                  name: null,
                  description: null,
                  price: null,
                  image: null,
                  id_product_category: null,
                  id_product_subcategory: null,
              },
              
              
          }
      },
      props: {
          record : Object
      },
      components: { Field, Form, ErrorMessage },
      mounted(){
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
          product_subcategory_data() {
              const store = useAppStore();
              const data = store.product_subcategory_data;
              return data;
          },
      },
      methods: {
          applyRecord(){
              this.product = this.record;
          },
          async save() {
            this.product.price = unformat(this.product.price, this.moneyConfig);

              this.isLoading = true;
              if(this.action == "PATCH"){
                  BASE_API_URL = BASE_API_URL+'/'+this.id;
              }
              const config = {
                  method: this.action,
                  url: `${BASE_API_URL}/product`,
                  data: this.product,
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
  
          const validationSchema_product = toTypedSchema(
              zod.object({
          name: zod.string().optional(),
          description: zod.string().optional(),
          price: zod.string().optional(),
          image: zod.string().optional(),
          id_product_category: zod.string().optional(),
          id_product_subcategory: zod.string().optional(),
   
          })
          );
  
          return {
          validationSchema_product,
          };
      },
  }
  </script>
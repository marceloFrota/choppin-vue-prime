<template>
    <form @submit="onSubmit">
      <input v-bind="name" />
      {{ errors.name }}
  
      <input type="email" v-bind="email" />
      {{ errors.email }}
  
      <input type="password" v-bind="password" />
      {{ errors.password }}
  
      {{ email.value }}

      <pre>{{ errors }}</pre>
      <button>Submit</button>
      <button @click="updateValues">set values</button>
    </form>
  </template>
  
  <script setup>
  import { useForm } from 'vee-validate';
  import * as zod from 'zod';
  import { toTypedSchema } from '@vee-validate/zod';
  
  const { defineInputBinds, errors, handleSubmit, setValues } = useForm({
    validationSchema: toTypedSchema(zod.object({
      name: zod.string().min(1),
      email: zod.string().min(1),
      password: zod.string().min(1),
    })),
  });
  
  const email = defineInputBinds('email');
  const name = defineInputBinds('name');
  const password = defineInputBinds('password');
  
  const onSubmit = handleSubmit((values, { resetForm }) => {
    console.log(values); // send data to API
    // reset the form and the field values to their initial values
    resetForm();
  });


  function updateValues() {
  setValues({
    email: 'test@example.com',
    password: 'p@$$w0rd',
  });
}
  </script>
  
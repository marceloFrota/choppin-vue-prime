<script setup>

import { onMounted, computed, ref, watch } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { useAppStore } from '@/store/store.js';

const store = useAppStore();

const { isDarkTheme } = useLayout();

const orderId = ref(null);
const order_data =ref(null)



const fetchDataFromApi = async (orderId) => {
  const apiUrl = `${BASE_API_URL}/order/${orderId}`; // Constrói a URL com o orderId
  try {
    const response = await axios.get(apiUrl);
    if (response.status === 200) {
        order_data.value = response.data;
    } else {
      console.error('Erro ao obter dados da API');
    }
  } catch (error) {
    console.error('Erro na chamada da API:', error);
  }
};

const order_item_data = computed(() => {
    const data = store.order_item_data
    return data;
});

onMounted(() => {
    const route = useRoute();
    orderId.value = route.params.id;
    fetchDataFromApi(orderId.value);
    store.get_order_item({id_order: orderId.value})
    

   
});






</script>

<template>
    <div  v-if="order_data" class="grid">
        <div class="col-6">
            <div class="card">
                <h5>Itens do Pedido</h5>
                <DataTable :value="order_item_data" :rows="5"  responsiveLayout="scroll">
                    <Column style="width: 15%">
                        <template #header> Image </template>
                        <template #body="slotProps">
                            <img :src=" slotProps.data.id_product_data.image" :alt="slotProps.data.image" width="50" class="shadow-2" />
                        </template>
                    </Column>
                    <Column field="name" header="Name" :sortable="true" style="width: 35%">
                    <template #body="slotProps">
                        {{ slotProps.data.id_product_data.name }}
                    </template></Column>
                    <Column field="price" header="Price" :sortable="true" style="width: 35%">
                        <template #body="slotProps">
                            {{ slotProps.data.product_price }}
                        </template>
                    </Column>
                    <Column style="width: 15%">
                        <template #header> View </template>
                        <template #body>
                            <Button icon="pi pi-search" type="button" class="p-button-text"></Button>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
        <div class="col-6">
            <div class="card">
                <h5>Status do Pedido</h5>
                <Timeline :value="order_data.order_status">
                    <template #opposite="slotProps" class="customized-timeline">
                        <small class="p-text-secondary">{{ slotProps.item.date }}</small>
                    </template>
   
                    <template #content="slotProps">
                        {{ slotProps.item.status }}
                    </template>
                </Timeline>
            </div>
            <div class="card">
                <h5>Informações do Cliente</h5>
                <table class="p-table p-table-striped" style="width: 100%">
                  <tbody>
                    <tr>
                      <td>Nome:</td>
                      <td>{{ order_data.id_customer_data.name }}</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>{{ order_data.id_customer_data.email }}</td>
                    </tr>
                    <tr>
                      <td>Número de Telefone:</td>
                      <td>{{ order_data.id_customer_data.phone_number }}</td>
                    </tr>
                    <tr>
                      <td>CPF:</td>
                      <td>{{ order_data.id_customer_data.doc_cpf }}</td>
                    </tr>
                    <tr>
                      <td>Data de Nascimento:</td>
                      <td>{{ order_data.id_customer_data.date_of_birth }}</td>
                    </tr>
                    <tr>
                      <td>Endereço:</td>
                      <td>{{ order_data.id_customer_data.address_line_1 }}</td>
                    </tr>
                    <tr>
                      <td>Cidade:</td>
                      <td>{{ order_data.id_customer_data.city }}</td>
                    </tr>
                    <tr>
                      <td>Estado:</td>
                      <td>{{ order_data.id_customer_data.state }}</td>
                    </tr>
                    <tr>
                      <td>CEP:</td>
                      <td>{{ order_data.id_customer_data.zip_code }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
        </div>

    </div>

   
</template>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row !important;

            .p-timeline-event-content {
                text-align: left !important;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }

        .p-card {
            margin-top: 1rem;
        }
    }
}
</style>

<script setup>
import { onMounted, reactive, ref, watch, computed } from 'vue';

import CustomRecentDataTable from '../../components/order/CustomRecentDataTable.vue';

import { useAppStore } from '@/store/store.js';

const store = useAppStore();

// Dados reativos
const recentSales = ref([]); // Certifique-se de que isso está sendo populado em store.get_order()

onMounted(() => {
    store.get_order();
});

// Função para calcular a soma das vendas recentes
const order_data = computed(() => {
    const data = store.order_data
    return data;
});

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

</script>

<template>
    <div class="grid">
        <div class="col-12 xl:col-12">
            <div class="card">
                <h5>Pedidos Recentes</h5>
                <CustomRecentDataTable :data="order_data"></CustomRecentDataTable>
            </div>
        </div>
    </div>
</template>

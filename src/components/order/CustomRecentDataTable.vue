<template>
    <DataTable :value="data" :rows="5" :paginator="true" responsiveLayout="scroll">
        <Column sortable field="id" header="ID">
            <Column style="width: 15%">
                <template #body="slotProps">
                    <span class="p-column-title">ID</span>
                    {{ slotProps.data.id }}
                </template>
            </Column>
        </Column>
        <Column sortable field="id_customer" header="Cliente">
            <template #body="slotProps">
                <span class="p-column-title">Cliente</span>
                {{ slotProps.data.id_customer_data ? slotProps.data.id_customer_data.name : '-' }}
            </template>
        </Column>
        <Column sortable field="total_price" header="Preço Total">
            <template #body="slotProps">
                <span class="p-column-title">Preço Total</span>
                {{ formatCurrency(slotProps.data.total_price) }}
            </template>
        </Column>
        <Column sortable field="eta" header="Tempo estimado de entrega">
            <template #body="slotProps">
                <span class="p-column-title">Tempo estimado de entrega</span>
                {{ slotProps.data.eta }}
            </template>
        </Column>
        <Column sortable field="status" header="Status">
            <template #body="slotProps">
                <span class="p-column-title">Status</span>
                <Tag class="mr-2" :severity="getSeverity('sucess')" value="Novo"></Tag>

            </template>
        </Column>
        <Column style="width: 15%">
            <template #header> View </template>
            <template #body="slotProps">
                <Button icon="pi pi-search" type="button" class="p-button-text" @click="viewOrder(slotProps.data.id)"></Button>
            </template>
        </Column>
    </DataTable>
</template>

<script>
import shared from '@/shared';
import { useAppStore } from '@/store/store.js';


export default {
    data() {
        return {};
    },
    props: {
        data: Array
    },
    computed: {
        fastapp_url() {
            return BASE_API_URL;
        }
    },
    methods: {
        formatDate(dateString) {
            return shared.formatDate(dateString);
        },
        formatDateTime(dateString) {
            return shared.formatDateTime(dateString);
        },
        formatCurrency(value) {
            return shared.formatCurrency(value);
        },
        edit(item) {
            this.$emit('edit', item);
        },
        remove(item) {
            this.$emit('remove', item);
        },
        viewOrder(id) {
            // Use o roteador Vue para navegar para a nova rota com o ID do pedido
            this.$router.push(`/choppin/order/${id}`);
        },
        getSeverity(value) {
        const store = useAppStore();
        const severity = store.getSeverity(value);
        return severity
        
    },
    }
};
</script>

<template>
    <DataTable :value="data" scrollable removableSort paginator :rows="20" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
        <Column sortable field="id" header="ID">
            <template #body="slotProps">
                <span class="p-column-title">ID</span>
                {{ slotProps.data.id }}
            </template>
        </Column>
        <Column sortable field="created_at" header="Criação">
            <template #body="slotProps">
                <span class="p-column-title">Criação</span>
                {{ formatDate(slotProps.data.created_at) }}
            </template>
        </Column>
        <Column sortable field="updated_at" header="Atualização">
            <template #body="slotProps">
                <span class="p-column-title">Atualização</span>
                {{ formatDate(slotProps.data.updated_at) }}
            </template>
        </Column>
        <Column sortable field="total_price" header="Preço Total">
            <template #body="slotProps">
                <span class="p-column-title">Preço Total</span>
                {{ formatCurrency(slotProps.data.total_price) }}
            </template>
        </Column>
        <Column sortable field="id_customer" header="Cliente">
            <template #body="slotProps">
                <span class="p-column-title">Cliente</span>
                {{ slotProps.data.id_customer_data ? slotProps.data.id_customer_data.name : '-' }}
            </template>
        </Column>
        <Column sortable field="id_partner" header="Parceiro">
            <template #body="slotProps">
                <span class="p-column-title">Parceiro</span>
                {{ slotProps.data.id_partner_data ? slotProps.data.id_partner_data.name : '-' }}
            </template>
        </Column>
        <Column sortable field="eta" header="Tempo estimado de entrega">
            <template #body="slotProps">
                <span class="p-column-title">Tempo estimado de entrega</span>
                {{ slotProps.data.eta }}
            </template>
        </Column>
        <Column sortable field="delivery_fee" header="Valor da entrega">
            <template #body="slotProps">
                <span class="p-column-title">Valor da entrega</span>
                {{ slotProps.data.delivery_fee }}
            </template>
        </Column>
        <Column sortable field="status" header="Status">
            <template #body="slotProps">
                <span class="p-column-title">Status</span>
                {{ slotProps.data.status }}
            </template>
        </Column>
        <Column frozen alignFrozen="right" headerStyle="min-width:10rem;">
            <template #body="slotProps">
                <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-1" @click="edit(slotProps.data)" />
                <Button icon="pi pi-trash" class="p-button-rounded p-button-warning mt-1" @click="remove(slotProps.data)" />
            </template>
        </Column>
    </DataTable>
</template>

<script>
import shared from '@/shared';

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
        }
    }
};
</script>

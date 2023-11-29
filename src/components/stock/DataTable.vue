<template>
    <DataTable 
        :value="data" 
        scrollable
        removableSort  
        paginator 
        :rows="20" 
        :rowsPerPageOptions="[5, 10, 20, 50]" 
        tableStyle="min-width: 50rem"
    >
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
        <Column sortable field="id_product" header="Produto">
            <template #body="slotProps">
                <span class="p-column-title">Produto</span>
                {{ slotProps.data.id_product_data ? slotProps.data.id_product_data.name : '-' }}
            </template>
        </Column>
        <Column sortable field="type" header="Tipo de movimentação">
            <template #body="slotProps">
                <span class="p-column-title">Tipo de movimentação</span>
                {{ slotProps.data.type }}
            </template>
        </Column>
        <Column sortable field="movement_at" header="Data de movimentação">
            <template #body="slotProps">
                <span class="p-column-title">Data de movimentação</span>
                {{ formatDate(slotProps.data.movement_at) }}
            </template>
        </Column>
        <Column sortable field="quantity" header="Quantidade">
            <template #body="slotProps">
                <span class="p-column-title">Quantidade</span>
                {{ slotProps.data.quantity }}
            </template>
        </Column>
        <Column sortable field="batch" header="Lote">
            <template #body="slotProps">
                <span class="p-column-title">Lote</span>
                {{ slotProps.data.batch }}
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
import shared from '@/shared'


export default {
data(){
    return {

    }
},
props: {
    data : Array
},
computed: {
    fastapp_url(){
        return BASE_API_URL
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
    edit(item){
        this.$emit("edit",item)
    },
    remove(item){
        this.$emit("remove",item)
    }
}
}
</script>
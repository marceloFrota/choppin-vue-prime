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
            <Column sortable field="name" header="Nome">
                <template #body="slotProps">
                    <span class="p-column-title">Nome</span>
                    {{ slotProps.data.name }}
                </template>
            </Column>
            <Column sortable field="description" header="Descrição">
                <template #body="slotProps">
                    <span class="p-column-title">Descrição</span>
                    {{ slotProps.data.description }}
                </template>
            </Column>
            <Column sortable field="image_url" header="Url da Imagem">
                <template #body="slotProps">
                    <span class="p-column-title">Url da Imagem</span>
                    {{ slotProps.data.image_url }}
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
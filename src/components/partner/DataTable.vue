<template>
    <DataTable :value="data"  scrollable :reorderableColumns="true" removableSort  paginator :rows="20" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
        <Column  sortable field="id" header="ID"></Column>
        <Column sortable field="created_at" header="Criação"></Column>
        <Column sortable field="updated_at" header="Atualização"></Column>
        <Column sortable field="name" header="Nome"></Column>
        <Column sortable field="email" header="Email"></Column>
        <Column sortable field="phone_number" header="Número de telefone"></Column>
        <Column sortable field="doc_cpf" header="CPF"></Column>
        <Column sortable field="date_of_birth" header="Data de Nascimento"></Column>
        <Column sortable field="address_line_1" header="Endereço linha 1"></Column>
        <Column sortable field="address_line_2" header="Endereço linha 2"></Column>
        <Column sortable field="city" header="Cidade"></Column>
        <Column sortable field="country" header="País"></Column>
        <Column sortable field="state" header="Estado"></Column>
        <Column sortable field="zip_code" header="CEP"></Column>
        <Column sortable field="logo" header="Logo"></Column>
        <Column sortable field="active" header="Ativo"></Column>
        <Column sortable field="operating_hours" header="Horário de funcionamento"></Column>
        <Column frozen alignFrozen="right" headerStyle="min-width:10rem;">
            <template #body="slotProps">
                <Button icon="pi pi-pencil" class="p-button-rounded p-button-success mr-1" @click="editProduct(slotProps.data)" />
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
    edit(item){
        this.$emit("edit",item)
    },
    remove(item){
        this.$emit("remove",item)
    }
}
}
</script>
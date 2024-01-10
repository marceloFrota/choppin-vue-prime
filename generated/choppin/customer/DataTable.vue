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
            <Column sortable field="email" header="Email">
                <template #body="slotProps">
                    <span class="p-column-title">Email</span>
                    {{ slotProps.data.email }}
                </template>
            </Column>
            <Column sortable field="phone_number" header="Número de telefone">
                <template #body="slotProps">
                    <span class="p-column-title">Número de telefone</span>
                    {{ slotProps.data.phone_number }}
                </template>
            </Column>
            <Column sortable field="doc_cpf" header="CPF">
                <template #body="slotProps">
                    <span class="p-column-title">CPF</span>
                    {{ slotProps.data.doc_cpf }}
                </template>
            </Column>
            <Column sortable field="date_of_birth" header="Data de Nascimento">
                <template #body="slotProps">
                    <span class="p-column-title">Data de Nascimento</span>
                    {{ formatDate(slotProps.data.date_of_birth) }}
                </template>
            </Column>
            <Column sortable field="address_line_1" header="Endereço linha 1">
                <template #body="slotProps">
                    <span class="p-column-title">Endereço linha 1</span>
                    {{ slotProps.data.address_line_1 }}
                </template>
            </Column>
            <Column sortable field="address_line_2" header="Endereço linha 2">
                <template #body="slotProps">
                    <span class="p-column-title">Endereço linha 2</span>
                    {{ slotProps.data.address_line_2 }}
                </template>
            </Column>
            <Column sortable field="city" header="Cidade">
                <template #body="slotProps">
                    <span class="p-column-title">Cidade</span>
                    {{ slotProps.data.city }}
                </template>
            </Column>
            <Column sortable field="country" header="País">
                <template #body="slotProps">
                    <span class="p-column-title">País</span>
                    {{ slotProps.data.country }}
                </template>
            </Column>
            <Column sortable field="state" header="Estado">
                <template #body="slotProps">
                    <span class="p-column-title">Estado</span>
                    {{ slotProps.data.state }}
                </template>
            </Column>
            <Column sortable field="zip_code" header="CEP">
                <template #body="slotProps">
                    <span class="p-column-title">CEP</span>
                    {{ slotProps.data.zip_code }}
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
<template>
    <div class="card">
        <Toolbar class="mb-4">
            <template v-slot:start>
                <div class="my-2">
                    <Button label="Novo" icon="pi pi-plus" class="p-button-success mr-2" @click="create" />
                </div>
            </template>
        </Toolbar>
        <DataTable_stock :data="stock_data" @remove="handleRemove" @edit="edit"></DataTable_stock>
        <Toast />

        <Dialog v-model:visible="dialog" :style="{ width: '450px' }" :header="modalTitle" :modal="true">
            <div class="flex align-items-center justify-content-center">
                <Form_stock :formAction="formAction" :record="stock" @saved="onSaved"></Form_stock>
            </div>
            <template #footer> </template>
        </Dialog>
        <Dialog v-model:visible="deleteDialog" :style="{ width: '450px' }" header="Confirmar" :modal="true">
            <div class="flex align-items-center justify-content-center">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="stock"
                    >Tem certeza que quer excluir <b>{{ stock.name }}</b
                    >?</span
                >
            </div>
            <template #footer>
                <Button label="Não" icon="pi pi-times" class="p-button-text" @click="deleteDialog = false" />
                <Button label="Sim" icon="pi pi-check" class="p-button-text" @click="remove(stock.id)" />
            </template>
        </Dialog>
    </div>
</template>

<script>
import axios from 'axios';
import { useAppStore } from '@/store/store.js';
import DataTable_stock from '../../components/stock/DataTable.vue';
import Form_stock from '../../components/stock/Form.vue';
import { useToast } from 'primevue/usetoast';

export default {
    data() {
        return {
            dialog: false,
            objectLabel: 'Estoque',
            deleteDialog: false,
            modalTitle: '',
            formAction: "POST",
            stock: null,
            toast: useToast()
        };
    },
    components: { DataTable_stock, Form_stock },
    created() {
        const store = useAppStore();
        store.get_stock();
    },
    computed: {
        stock_data() {
            const store = useAppStore();
            const data = store.stock_data;
            return data;
        }
    },
    methods: {
        openNew() {
            this.dialog = true;
        },
        create() {
            this.dialog = true;
            this.modalTitle = `Cadastrar ${this.objectLabel}`;
            this.formAction = "POST",
            this.stock =null
        },
        edit(value) {
            this.dialog = true;
            this.modalTitle = `Editar ${this.objectLabel}`;
            this.formAction = "PATCH",
            this.stock = value;

        },
        async remove(id) {
            let url = `${BASE_API_URL}/stock/${id}`;

            this.isLoading = true;

            const config = {
                method: 'DELETE',
                url: url
            };
            await axios(config)
                .then((response) => {
                    console.log(response);
                    this.toast.add({ severity: 'success', summary: 'Sucesso', detail: `${this.objectLabel} removido com sucesso!`, life: 3000 });
                    this.deleteDialog = false;
                    const store = useAppStore();
                    store.get_stock();
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
        handleRemove(value) {
            this.deleteDialog = true;
            this.modalTitle = `Deletar ${this.objectLabel}`;
            this.stock = value;
        },
        onSaved() {
            const store = useAppStore();
            store.get_stock();
            this.toast.add({ severity: 'success', summary: 'Sucesso', detail: `Cadastro de ${this.objectLabel} realizado com sucesso!`, life: 3000 });
            this.dialog = false;
        }
    }
};
</script>

<template>
    <div class="card">
        <Toolbar class="mb-4">
            <template v-slot:start>
                <div class="my-2">
                    <Button label="Novo" icon="pi pi-plus" class="p-button-success mr-2" @click="create" />
                </div>
            </template>
        </Toolbar>
        <DataTable_order :data="order_data" @remove="handleRemove" @edit="edit"></DataTable_order>
        <Toast />

        <Dialog v-model:visible="dialog" :style="{ width: '450px' }" :header="modalTitle" :modal="true">
            <div class="flex align-items-center justify-content-center">
                <Form_order :formAction="formAction" :record="order" @saved="onSaved"></Form_order>
            </div>
            <template #footer> </template>
        </Dialog>
        <Dialog v-model:visible="deleteDialog" :style="{ width: '450px' }" header="Confirmar" :modal="true">
            <div class="flex align-items-center justify-content-center">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="order"
                    >Tem certeza que quer excluir <b>{{ order.name }}</b
                    >?</span
                >
            </div>
            <template #footer>
                <Button label="Não" icon="pi pi-times" class="p-button-text" @click="deleteDialog = false" />
                <Button label="Sim" icon="pi pi-check" class="p-button-text" @click="remove(order.id)" />
            </template>
        </Dialog>
    </div>
</template>

<script>
import axios from 'axios';
import { useAppStore } from '@/store/store.js';
import DataTable_order from '../../components/order/DataTable.vue';
import Form_order from '../../components/order/Form.vue';
import { useToast } from 'primevue/usetoast';

export default {
    data() {
        return {
            dialog: false,
            objectLabel: 'Pedidos',
            deleteDialog: false,
            modalTitle: '',
            formAction: "POST",
            order: null,
            toast: useToast()
        };
    },
    components: { DataTable_order, Form_order },
    created() {
        const store = useAppStore();
        store.get_order();
    },
    computed: {
        order_data() {
            const store = useAppStore();
            const data = store.order_data;
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
            this.order =null
        },
        edit(value) {
            this.dialog = true;
            this.modalTitle = `Editar ${this.objectLabel}`;
            this.formAction = "PATCH",
            this.order = value;

        },
        async remove(id) {
            let url = `${BASE_API_URL}/order/${id}`;

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
                    store.get_order();
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
            this.order = value;
        },
        onSaved() {
            const store = useAppStore();
            store.get_order();
            this.toast.add({ severity: 'success', summary: 'Sucesso', detail: `Cadastro de ${this.objectLabel} realizado com sucesso!`, life: 3000 });
            this.dialog = false;
        }
    }
};
</script>

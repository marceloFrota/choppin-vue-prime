<template>
    <div class="card">
        <Toolbar class="mb-4">
            <template v-slot:start>
                <div class="my-2">
                    <Button label="Novo" icon="pi pi-plus" class="p-button-success mr-2" @click="create" />
                </div>
            </template>
        </Toolbar>
        <DataTable_product_category :data="product_category_data" @remove="handleRemove" @edit="edit"></DataTable_product_category>
        <Toast />

        <Dialog v-model:visible="dialog" :style="{ width: '450px' }" :header="modalTitle" :modal="true">
            <div class="flex align-items-center justify-content-center">
                <Form_product_category :formAction="formAction" :record="product_category" @saved="onSaved"></Form_product_category>
            </div>
            <template #footer> </template>
        </Dialog>
        <Dialog v-model:visible="deleteDialog" :style="{ width: '450px' }" header="Confirmar" :modal="true">
            <div class="flex align-items-center justify-content-center">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product_category"
                    >Tem certeza que quer excluir <b>{{ product_category.name }}</b
                    >?</span
                >
            </div>
            <template #footer>
                <Button label="Não" icon="pi pi-times" class="p-button-text" @click="deleteDialog = false" />
                <Button label="Sim" icon="pi pi-check" class="p-button-text" @click="remove(product_category.id)" />
            </template>
        </Dialog>
    </div>
</template>

<script>
import axios from 'axios';
import { useAppStore } from '@/store/store.js';
import DataTable_product_category from '../../components/product_category/DataTable.vue';
import Form_product_category from '../../components/product_category/Form.vue';
import { useToast } from 'primevue/usetoast';

export default {
    data() {
        return {
            dialog: false,
            objectLabel: 'Categoria de Produtos',
            deleteDialog: false,
            modalTitle: '',
            formAction: "POST",
            product_category: null,
            toast: useToast()
        };
    },
    components: { DataTable_product_category, Form_product_category },
    created() {
        const store = useAppStore();
        store.get_product_category();
    },
    computed: {
        product_category_data() {
            const store = useAppStore();
            const data = store.product_category_data;
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
            this.product_category =null
        },
        edit(value) {
            this.dialog = true;
            this.modalTitle = `Editar ${this.objectLabel}`;
            this.formAction = "PATCH",
            this.product_category = value;

        },
        async remove(id) {
            let url = `${BASE_API_URL}/product_category/${id}`;

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
                    store.get_product_category();
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
            this.product_category = value;
        },
        onSaved() {
            const store = useAppStore();
            store.get_product_category();
            this.toast.add({ severity: 'success', summary: 'Sucesso', detail: `Cadastro de ${this.objectLabel} realizado com sucesso!`, life: 3000 });
            this.dialog = false;
        }
    }
};
</script>

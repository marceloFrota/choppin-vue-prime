<script>
import { useAppStore } from '@/store/store.js';
import DataTable_partner from '../../components/partner/DataTable.vue';
import Form_partner from '../../components/partner/Form.vue';
import { useToast } from 'primevue/usetoast';

export default {
    data() {
        return {
            dialog: false,
            objectLabel: 'Parceiro',
            deletetDialog: false,
            modalTitle: '',
            partner: {},
            toast: useToast()
        };
    },
    components: { DataTable_partner, Form_partner },
    created() {
        const store = useAppStore();
        store.get_partner();
    },
    computed: {
        partner_data() {
            const store = useAppStore();
            const data = store.partner_data;
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
        },
        edit() {
            this.dialog = true;
            this.modalTitle = `Editar ${this.objectLabel}`;
        },
        remove(value) {
            this.deletetDialog = true;
            this.modalTitle = `Deletar ${this.objectLabel}`;
            this.partner = value;
        },
        onSaved() {
            this.toast.add({ severity: 'success', summary: 'Successful', detail: 'Parceiro Cadastrado', life: 3000 });
            this.dialog = false;
        }
    }
};
</script>

<template>
    <div class="card">
        <Toolbar class="mb-4">
            <template v-slot:start>
                <div class="my-2">
                    <Button label="Novo" icon="pi pi-plus" class="p-button-success mr-2" @click="create" />
                </div>
            </template>
        </Toolbar>
        <DataTable_partner :data="partner_data" @remove="remove"></DataTable_partner>
        <Toast />

        <Dialog v-model:visible="dialog" :style="{ width: '450px' }" :header="modalTitle" :modal="true">
            <div class="flex align-items-center justify-content-center">
                <Form_partner @saved="onSaved"></Form_partner>
            </div>
            <template #footer> </template>
        </Dialog>
        <Dialog v-model:visible="deletetDialog" :style="{ width: '450px' }" header="Confirmar" :modal="true">
            <div class="flex align-items-center justify-content-center">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="partner"
                    >Tem certeza que quer excluir <b>{{ partner.name }}</b
                    >?</span
                >
            </div>
            <template #footer>
                <Button label="Não" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false" />
                <Button label="Sim" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
            </template>
        </Dialog>
    </div>
</template>

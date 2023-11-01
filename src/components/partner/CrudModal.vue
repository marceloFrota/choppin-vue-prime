<template>
    <div class="card">
        <Toolbar class="mb-4">
            <template v-slot:start>
                <div class="my-2">
                    <Button label="Novo" icon="pi pi-plus" class="p-button-success mr-2" @click="create" />
                </div>
            </template>
        </Toolbar>
        <DataTable_partner :data="partner_data" @remove="handleRemove" @edit="edit"></DataTable_partner>
        <Toast />

        <Dialog v-model:visible="dialog" :style="{ width: '450px' }" :header="modalTitle" :modal="true">
            <div class="flex align-items-center justify-content-center">
                <Form_partner :record="partner" :formAction="formAction" @saved="onSaved"></Form_partner>
            </div>
            <template #footer> </template>
        </Dialog>
        <Dialog v-model:visible="deleteDialog" :style="{ width: '450px' }" header="Confirmar" :modal="true">
            <div class="flex align-items-center justify-content-center">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="partner"
                    >Tem certeza que quer excluir <b>{{ partner.name }}</b
                    >?</span
                >
            </div>
            <template #footer>
                <Button label="Não" icon="pi pi-times" class="p-button-text" @click="deleteDialog = false" />
                <Button label="Sim" icon="pi pi-check" class="p-button-text" @click="remove(partner.id)" />
            </template>
        </Dialog>
    </div>
</template>

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
            deleteDialog: false,
            modalTitle: '',
            partner: null,
            formAction: "POST",
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
            this.formAction = "POST",
            this.partner =null
        },
        edit(value) {
            this.dialog = true;
            this.modalTitle = `Editar ${this.objectLabel}`;
            this.formAction = "PATCH",
            this.partner = value;

        },
        remove(id){
            // logica do remove
        },
        handleRemove(value) {
            this.deleteDialog = true;
            this.modalTitle = `Deletar ${this.objectLabel}`;
            this.partner = value;
        },
        onSaved() {
            this.toast.add({ severity: 'success', summary: 'Sucesso', detail: `Cadastro de ${this.objectLabel} realizado com sucesso!`, life: 3000 });
            this.dialog = false;
        }
    }
};
</script>

<template>
    <div>
        <div class="columns">
            <div class="column"></div>
            <div class="column is-one-fifth box-button">
                <button class="button" @click="openModal">Criar Promoção</button>
            </div>
        </div>
        <Modal :title="'Criar Promoção'" ref="modal">
            <Form_product_category @close="closeModal"></Form_product_category>
        </Modal>
        <Modal :title="'Remover Promoção'" ref="remove"><h1>remover</h1></Modal>

        <div class="box">
            <ListDefault_product_category :data="product_category_data"></ListDefault_product_category>
        </div>
    </div>
</template>
<script>
import { useAppStore } from '@/store/store.js';
import Modal from '@/components/modal/Modal.vue';
import ListDefault_offer from '@/components/offer/ListDefault.vue';
import Form_offer from '@/components/offer/FormDefault.vue';

export default {
    name: 'CrudDefault',
    components: { Modal, ListDefault_offer, Form_offer },
    data() {
        return {
            id_product_category_data: null,
            formattedDate: '',
            x: ''
        };
    },
    mounted() {},
    computed: {
        offer_data() {
            const store = useAppStore();
            const data = store.offer_data;
            return data;
        }
    },
    methods: {
        openModal() {
            this.$refs.modal.openModal();
        },
        closeModal() {
            this.$refs.modal.closeModal();
        },
        edit(id) {
            console.log('editando o item de id:', id);
        },
        remove(id) {
            console.log('excluindo o item de id:', id);
            this.$refs.remove.openModal();
        },
        async get_offer() {
            const store = useAppStore();

            const params = {
                $limit: 1000
            };
            if (this.id_product_category_data != 0) {
                params.id_product_category = this.id_product_category_data;
            }
            store.get_offer(params);
        }
    }
};
</script>
<style scoped lang="scss">
.box-button {
    display: flex;
    justify-content: end;
}
</style>

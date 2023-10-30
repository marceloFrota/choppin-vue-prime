<template>
    <div class="card">
        <Toolbar class="mb-4">
            <template v-slot:start>
                <div class="my-2">
                    <Button label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />
                </div>
            </template>

           
        </Toolbar>
        <DataTable_product :data="product_data"></DataTable_product>
    </div>
</template>

<script>
import { useAppStore } from "@/store/store.js";
import DataTable_product from '../../components/product/DataTable.vue';



export default {
    data() {
        return {
            
        };
        
    },
    components: { DataTable_product },
    created(){
        const store = useAppStore();
        store.get_product();

    },
    computed: {
    product_data() {
      const store = useAppStore();
      const data = store.product_data;
      return data;
    },
  },
}
</script>
<template>
    <div class="card">
        <Toolbar class="mb-4">
            <template v-slot:start>
                <div class="my-2">
                    <Button label="New" icon="pi pi-plus" class="p-button-success mr-2" @click="openNew" />
                </div>
            </template>

           
        </Toolbar>
        <DataTable_partner :data="partner_data"></DataTable_partner>
    </div>
</template>

<script>
import { useAppStore } from "@/store/store.js";
import DataTable_partner from '../../components/partner/DataTable.vue';



export default {
    data() {
        return {
            
        };
        
    },
    components: { DataTable_partner },
    created(){
        const store = useAppStore();
        store.get_partner();

    },
    computed: {
    partner_data() {
      const store = useAppStore();
      const data = store.partner_data;
      return data;
    },
  },
}
</script>
<script setup>
import { onMounted } from 'vue';

import { useAppStore } from '@/store/store.js';

const store = useAppStore();

onMounted(() => {
    store.get_product();
    store.get_product_category();
    store.get_order();
    store.get_customer();
    store.get_product_subcategory();
});
</script>

<template>
    <router-view />
</template>

<style scoped></style>

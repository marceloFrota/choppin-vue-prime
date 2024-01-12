<script>
import ProductService from '@/service/ProductService';
//import { useAppStore } from '@/store/store.js';

export default {
    data() {
        return {
            cart: [],
            sidebar: false,
            dataviewValue: null,
            layout: 'grid',
            sortKeyPrice: null,
            sortKeyCategory: null,
            sortOrder: null,
            sortField: null,
            sortOptionsByPrice: [
                { label: 'Price Low to High', value: 'price' },
                { label: 'Price High to Low', value: '!price' }
            ],
            sortOptionsByCategory: [
                { label: 'Category A to Z', value: 'category' },
                { label: 'Category Z to A', value: '!category' }
            ]
        };
    },
    created() {
        this.productService = new ProductService();
        this.productService.getProductsSmall().then((data) => {
            this.dataviewValue = data;
        });
    },
    methods: {
        applySorting() {
            if (!this.sortField) return;

            const compare = (a, b) => {
                let valueA = a[this.sortField];
                let valueB = b[this.sortField];

                if (typeof valueA === 'string') valueA = valueA.toLowerCase();
                if (typeof valueB === 'string') valueB = valueB.toLowerCase();

                if (valueA < valueB) return -1 * this.sortOrder;
                if (valueA > valueB) return 1 * this.sortOrder;
                return 0;
            };
            this.dataviewValue.sort(compare);
        },
        onSortChange(event) {
            const value = event.value.value;
            if (value.indexOf('!') === 0) {
                this.sortOrder = -1;
                this.sortField = value.substring(1);
            } else {
                this.sortOrder = 1;
                this.sortField = value;
            }

            // Check which dropdown triggered the change
            if (this.sortOptionsByPrice.map((option) => option.value).includes(value)) {
                this.sortKeyPrice = event.value;
                this.sortKeyCategory = null; // Reset the other filter
            } else if (this.sortOptionsByCategory.map((option) => option.value).includes(value)) {
                this.sortKeyCategory = event.value;
                this.sortKeyPrice = null; // Reset the other filter
            }

            // Apply the sorting logic
            this.applySorting();
        }
    }
};
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <div class="title-container">
                    <h5>DataView</h5>
                    <i class="pi pi-shopping-cart cursor-pointer" style="font-size: 2rem" @click="sidebar = true"></i>
                </div>
                <Sidebar v-model:visible="sidebar" header="Right Sidebar" position="right">
                    <pre>{{ cart }}</pre>
                </Sidebar>
                <DataView :value="dataviewValue" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">
                    <template #header>
                        <div class="grid grid-nogutter">
                            <div class="col-6 text-left">
                                <Dropdown class="mr-2" v-model="sortKeyPrice" :options="sortOptionsByPrice" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)" />
                                <Dropdown v-model="sortKeyCategory" :options="sortOptionsByCategory" optionLabel="label" placeholder="Sort By Category" @change="onSortChange($event)" />
                            </div>
                            <div class="col-6 text-right">
                                <DataViewLayoutOptions v-model="layout" />
                            </div>
                        </div>
                    </template>
                    <template #list="slotProps">
                        <div class="col-12">
                            <div class="flex flex-column md:flex-row align-items-center p-3 w-full">
                                <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="my-4 md:my-0 w-9 md:w-10rem shadow-2 mr-5" />
                                <div class="flex-1 text-center md:text-left">
                                    <div class="font-bold text-2xl">{{ slotProps.data.name }}</div>
                                    <div class="mb-3">{{ slotProps.data.description }}</div>
                                    <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" class="mb-2"></Rating>
                                    <div class="flex align-items-center">
                                        <i class="pi pi-tag mr-2"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </div>
                                </div>
                                <div class="flex flex-row md:flex-column justify-content-between w-full md:w-auto align-items-center md:align-items-end mt-5 md:mt-0">
                                    <span class="text-2xl font-semibold mb-2 align-self-center md:align-self-end">${{ slotProps.data.price }}</span>
                                    <Button icon="pi pi-shopping-cart" label="Add to Cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'" class="mb-2"></Button>
                                    <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
                                </div>
                            </div>
                        </div>
                    </template>

                    <template #grid="slotProps">
                        <div class="col-12 md:col-4">
                            <div class="card m-3 border-1 surface-border">
                                <div class="flex align-items-center justify-content-between">
                                    <div class="flex align-items-center">
                                        <i class="pi pi-tag mr-2"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </div>
                                    <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
                                </div>
                                <div class="text-center">
                                    <img :src="'demo/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-9 shadow-2 my-3 mx-0" />
                                    <div class="text-2xl font-bold">{{ slotProps.data.name }}</div>
                                    <div class="mb-3">{{ slotProps.data.description }}</div>
                                    <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false"></Rating>
                                </div>
                                <div class="flex align-items-center justify-content-between">
                                    <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                                    <Button icon="pi pi-shopping-cart" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'" @click="() => cart.push(slotProps.data)"></Button>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    h5 {
        margin-bottom: 0px;
    }
}
</style>

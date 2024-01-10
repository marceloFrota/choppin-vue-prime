/*export default [
    {
        path: '/choppin/partner',
        name: 'choppinpartner',
        component: () => import('@/components/partner/CrudModal.vue')
    },
    {
        path: '/choppin/product',
        name: 'choppinproduct',
        component: () => import('@/components/product/CrudModal.vue')
    },
    {
        path: '/choppin/product_category',
        name: 'choppinproduct_category',
        component: () => import('@/components/product_category/CrudModal.vue')
    },
    {
        path: '/choppin/product_subcategory',
        name: 'choppinproduct_subcategory',
        component: () => import('@/components/product_subcategory/CrudModal.vue')
    },
    {
        path: '/choppin/order',
        name: 'choppinorder',
        component: () => import('@/components/order/CrudModal.vue')
    },
    {
        path: '/choppin/order/:id',
        name: 'choppinorderdetail',
        component: () => import('@/components/order/Detail.vue')
    },
    {
        path: '/choppin/customer',
        name: 'choppincustomer',
        component: () => import('@/components/customer/CrudModal.vue')
    },
    {
        path: '/choppin/stock',
        name: 'choppinstock',
        component: () => import('@/components/stock/CrudModal.vue')
    },
    {
        path: '/choppin/offer',
        name: 'choppinoffer',
        component: () => import('@/components/offer/CrudModal.vue')
    }
];*/
export default [
    {
        path: 'choppin/partner',
        name: 'choppinpartner',
        component: () => import('@/components/partner/CrudModal.vue')
    },
    {
        path: 'choppin/product',
        name: 'choppinproduct',
        component: () => import('@/components/product/CrudModal.vue')
    },
    {
        path: 'choppin/customer',
        name: 'choppincustomer',
        component: () => import('@/components/customer/CrudModal.vue')
    },
    {
        path: 'choppin/product_category',
        name: 'choppinproduct_category',
        component: () => import('@/components/product_category/CrudModal.vue')
    },
    {
        path: 'choppin/order',
        name: 'choppinorder',
        component: () => import('@/components/order/CrudModal.vue')
    },
    {
        path: 'choppin/order_item',
        name: 'choppinorder_item',
        component: () => import('@/components/order_item/CrudModal.vue')
    },
    {
        path: 'choppin/cart_item',
        name: 'choppincart_item',
        component: () => import('@/components/cart_item/CrudModal.vue')
    },
    {
        path: 'choppin/order_status',
        name: 'choppinorder_status',
        component: () => import('@/components/order_status/CrudModal.vue')
    },
    {
        path: 'choppin/product_subcategory',
        name: 'choppinproduct_subcategory',
        component: () => import('@/components/product_subcategory/CrudModal.vue')
    },
    {
        path: 'choppin/stock',
        name: 'choppinstock',
        component: () => import('@/components/stock/CrudModal.vue')
    },
    {
        path: 'choppin/offer',
        name: 'choppinoffer',
        component: () => import('@/components/offer/CrudModal.vue')
    }
];

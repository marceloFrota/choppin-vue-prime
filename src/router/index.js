import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/choppin/DashboardAdmin.vue')
                },
                {
                    path: '/choppin/dashboardadmin',
                    name: 'dashboardadmin',
                    component: () => import('@/views/choppin/DashboardAdmin.vue')
                },
                {
                    path: '/choppin/dashboardpartner',
                    name: 'dashboardpartner',
                    component: () => import('@/views/choppin/DashboardPartner.vue')
                },
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
                    path: '/choppin/settings',
                    name: 'choppinsettings',
                    component: () => import('@/views/choppin/Settings.vue')
                },
                {
                    path: '/choppin/catalog',
                    name: 'choppincatalog',
                    component: () => import('@/views/choppin/Catalog.vue')
                },
                {
                    path: '/choppin/orders',
                    name: 'choppinorders',
                    component: () => import('@/views/choppin/Orders.vue')
                },
                {
                    path: '/choppin/orderdetails',
                    name: 'choppinorderdetails',
                    component: () => import('@/views/choppin/OrderDetails.vue')
                },

                {
                    path: '/choppin/fileuploadsimple',
                    name: 'choppinfileuploadsimple',
                    component: () => import('@/components/shared/FileUploadSimple.vue')
                },
                {
                    path: '/choppin/fileuploadmultiple',
                    name: 'choppinfileuploadmultiple',
                    component: () => import('@/components/shared/FileUploadMultiple.vue')
                },
                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    component: () => import('@/views/uikit/Input.vue')
                },
                {
                    path: '/uikit/floatlabel',
                    name: 'floatlabel',
                    component: () => import('@/views/uikit/FloatLabel.vue')
                },
                {
                    path: '/uikit/invalidstate',
                    name: 'invalidstate',
                    component: () => import('@/views/uikit/InvalidState.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/views/uikit/Button.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/Table.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/List.vue')
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    component: () => import('@/views/uikit/Tree.vue')
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    component: () => import('@/views/uikit/Panels.vue')
                },

                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    component: () => import('@/views/uikit/Overlay.vue')
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/Media.vue')
                },
                {
                    path: '/uikit/menu',
                    component: () => import('@/views/uikit/Menu.vue'),
                    children: [
                        {
                            path: '/uikit/menu',
                            component: () => import('@/views/uikit/menu/PersonalDemo.vue')
                        },
                        {
                            path: '/uikit/menu/seat',
                            component: () => import('@/views/uikit/menu/SeatDemo.vue')
                        },
                        {
                            path: '/uikit/menu/payment',
                            component: () => import('@/views/uikit/menu/PaymentDemo.vue')
                        },
                        {
                            path: '/uikit/menu/confirmation',
                            component: () => import('@/views/uikit/menu/ConfirmationDemo.vue')
                        }
                    ]
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/Messages.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/File.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/views/uikit/Chart.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/Misc.vue')
                },
                {
                    path: '/blocks',
                    name: 'blocks',
                    component: () => import('@/views/utilities/Blocks.vue')
                },
                {
                    path: '/utilities/icons',
                    name: 'icons',
                    component: () => import('@/views/utilities/Icons.vue')
                },
                {
                    path: '/pages/timeline',
                    name: 'timeline',
                    component: () => import('@/views/pages/Timeline.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/utilities/Documentation.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;

import { defineStore } from 'pinia';
import axios from 'axios';

//App - choppin
export const useAppStore = defineStore('app', {
    state: () => ({
        partner_data: null,
        product_data: null,
        customer_data: null,
        product_category_data: null,
        order_data: null,
        order_item_data: null,
        cart_item_data: null,
        order_status_data: null,
        product_subcategory_data: null,
        stock_data: null,
        offer_data: null
    }),
    actions: {
        async get_partner(params = {}) {
            //const token = this.getToken();
            const config = {
                method: 'get',
                url: `${BASE_API_URL}/partner`,
                params
            };
            try {
                const response = await axios(config);
                this.partner_data = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async get_product(params = {}) {
            //const token = this.getToken();
            const config = {
                method: 'get',
                url: `${BASE_API_URL}/product`,
                params
            };
            try {
                const response = await axios(config);
                this.product_data = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async get_customer(params = {}) {
            //const token = this.getToken();
            const config = {
                method: 'get',
                url: `${BASE_API_URL}/customer`,
                params
            };
            try {
                const response = await axios(config);
                this.customer_data = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async get_product_category(params = {}) {
            //const token = this.getToken();
            const config = {
                method: 'get',
                url: `${BASE_API_URL}/product_category`,
                params
            };
            try {
                const response = await axios(config);
                this.product_category_data = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async get_order(params = {}) {
            //const token = this.getToken();
            const config = {
                method: 'get',
                url: `${BASE_API_URL}/order`,
                params
            };
            try {
                const response = await axios(config);
                this.order_data = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async get_order_item(params = {}) {
            //const token = this.getToken();
            const config = {
                method: 'get',
                url: `${BASE_API_URL}/order_item`,
                params
            };
            try {
                const response = await axios(config);
                this.order_item_data = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async get_cart_item(params = {}) {
            //const token = this.getToken();
            const config = {
                method: 'get',
                url: `${BASE_API_URL}/cart_item`,
                params
            };
            try {
                const response = await axios(config);
                this.cart_item_data = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async get_order_status(params = {}) {
            //const token = this.getToken();
            const config = {
                method: 'get',
                url: `${BASE_API_URL}/order_status`,
                params
            };
            try {
                const response = await axios(config);
                this.order_status_data = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async get_product_subcategory(params = {}) {
            //const token = this.getToken();
            const config = {
                method: 'get',
                url: `${BASE_API_URL}/product_subcategory`,
                params
            };
            try {
                const response = await axios(config);
                this.product_subcategory_data = response.data.data;
            } catch (error) {
                console.error(error);
            }
        },
        async get_stock(params = {}) {
            //const token = this.getToken();
            const config = {
                method: 'get',
                url: `${BASE_API_URL}/stock`,
                params
            };
            try {
                const response = await axios(config);
                this.stock_data = response.data.data;
                this.stock = response.data;
            } catch (error) {
                console.error(error);
            }
        },
        async get_offer(params = {}) {
            //const token = this.getToken();
            const config = {
                method: 'get',
                url: `${BASE_API_URL}/offer`,
                params
            };
            try {
                const response = await axios(config);
                this.offer_data = response.data.data;
            } catch (error) {
                console.error(error);
            }
        }
    }
});

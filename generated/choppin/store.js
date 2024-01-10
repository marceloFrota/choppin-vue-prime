import { defineStore } from "pinia";
import axios from "axios";

//App - choppin
export const useAppStore = defineStore('app', {
    state: () => ({
        partner: {
            data: null,
            total: null,
            loading: false,
            loaded: false
        },
        product: {
            data: null,
            total: null,
            loading: false,
            loaded: false
        },
        customer: {
            data: null,
            total: null,
            loading: false,
            loaded: false
        },
        product_category: {
            data: null,
            total: null,
            loading: false,
            loaded: false
        },
        order: {
            data: null,
            total: null,
            loading: false,
            loaded: false
        },
        order_item: {
            data: null,
            total: null,
            loading: false,
            loaded: false
        },
        cart_item: {
            data: null,
            total: null,
            loading: false,
            loaded: false
        },
        order_status: {
            data: null,
            total: null,
            loading: false,
            loaded: false
        },
        product_subcategory: {
            data: null,
            total: null,
            loading: false,
            loaded: false
        },
        stock: {
            data: null,
            total: null,
            loading: false,
            loaded: false
        },
        offer: {
            data: null,
            total: null,
            loading: false,
            loaded: false
        },
    }),
    actions: {
    get_partner() {
        this.partner.loading = true;
        const token = localStorage.getItem("token");
  
        axios
          .get(`${BASE_URL}/partner`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((response) => {
            this.partner.data = response.data.data;
            this.partner.loaded = true;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.partner.loading = false;
          });
      },
    get_product() {
        this.product.loading = true;
        const token = localStorage.getItem("token");
  
        axios
          .get(`${BASE_URL}/product`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((response) => {
            this.product.data = response.data.data;
            this.product.loaded = true;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.product.loading = false;
          });
      },
    get_customer() {
        this.customer.loading = true;
        const token = localStorage.getItem("token");
  
        axios
          .get(`${BASE_URL}/customer`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((response) => {
            this.customer.data = response.data.data;
            this.customer.loaded = true;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.customer.loading = false;
          });
      },
    get_product_category() {
        this.product_category.loading = true;
        const token = localStorage.getItem("token");
  
        axios
          .get(`${BASE_URL}/product_category`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((response) => {
            this.product_category.data = response.data.data;
            this.product_category.loaded = true;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.product_category.loading = false;
          });
      },
    get_order() {
        this.order.loading = true;
        const token = localStorage.getItem("token");
  
        axios
          .get(`${BASE_URL}/order`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((response) => {
            this.order.data = response.data.data;
            this.order.loaded = true;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.order.loading = false;
          });
      },
    get_order_item() {
        this.order_item.loading = true;
        const token = localStorage.getItem("token");
  
        axios
          .get(`${BASE_URL}/order_item`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((response) => {
            this.order_item.data = response.data.data;
            this.order_item.loaded = true;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.order_item.loading = false;
          });
      },
    get_cart_item() {
        this.cart_item.loading = true;
        const token = localStorage.getItem("token");
  
        axios
          .get(`${BASE_URL}/cart_item`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((response) => {
            this.cart_item.data = response.data.data;
            this.cart_item.loaded = true;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.cart_item.loading = false;
          });
      },
    get_order_status() {
        this.order_status.loading = true;
        const token = localStorage.getItem("token");
  
        axios
          .get(`${BASE_URL}/order_status`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((response) => {
            this.order_status.data = response.data.data;
            this.order_status.loaded = true;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.order_status.loading = false;
          });
      },
    get_product_subcategory() {
        this.product_subcategory.loading = true;
        const token = localStorage.getItem("token");
  
        axios
          .get(`${BASE_URL}/product_subcategory`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((response) => {
            this.product_subcategory.data = response.data.data;
            this.product_subcategory.loaded = true;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.product_subcategory.loading = false;
          });
      },
    get_stock() {
        this.stock.loading = true;
        const token = localStorage.getItem("token");
  
        axios
          .get(`${BASE_URL}/stock`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((response) => {
            this.stock.data = response.data.data;
            this.stock.loaded = true;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.stock.loading = false;
          });
      },
    get_offer() {
        this.offer.loading = true;
        const token = localStorage.getItem("token");
  
        axios
          .get(`${BASE_URL}/offer`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((response) => {
            this.offer.data = response.data.data;
            this.offer.loaded = true;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.offer.loading = false;
          });
      },
    }
})
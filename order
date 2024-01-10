import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/partner",
    name: "Parceiros",
    component: Crud_partner,
    children: [
      {
        path: "/detail/:id",
        name: "Detalhes de Parceiros",
        component: Detail_partner,
      },
      {
        path: "/list",
        name: "Lista de Parceiros",
        component: List_partner,
      },
      {
        path: ":id",
        name: "Form de Parceiros",
        component: Form_partner,
      },
  },
  {
    path: "/product",
    name: "Produto",
    component: Crud_product,
    children: [
      {
        path: "/detail/:id",
        name: "Detalhes de Produto",
        component: Detail_product,
      },
      {
        path: "/list",
        name: "Lista de Produto",
        component: List_product,
      },
      {
        path: ":id",
        name: "Form de Produto",
        component: Form_product,
      },
  },
  {
    path: "/customer",
    name: "Cliente",
    component: Crud_customer,
    children: [
      {
        path: "/detail/:id",
        name: "Detalhes de Cliente",
        component: Detail_customer,
      },
      {
        path: "/list",
        name: "Lista de Cliente",
        component: List_customer,
      },
      {
        path: ":id",
        name: "Form de Cliente",
        component: Form_customer,
      },
  },
  {
    path: "/product_category",
    name: "Categoria de Produtos",
    component: Crud_product_category,
    children: [
      {
        path: "/detail/:id",
        name: "Detalhes de Categoria de Produtos",
        component: Detail_product_category,
      },
      {
        path: "/list",
        name: "Lista de Categoria de Produtos",
        component: List_product_category,
      },
      {
        path: ":id",
        name: "Form de Categoria de Produtos",
        component: Form_product_category,
      },
  },
  {
    path: "/order",
    name: "Pedidos",
    component: Crud_order,
    children: [
      {
        path: "/detail/:id",
        name: "Detalhes de Pedidos",
        component: Detail_order,
      },
      {
        path: "/list",
        name: "Lista de Pedidos",
        component: List_order,
      },
      {
        path: ":id",
        name: "Form de Pedidos",
        component: Form_order,
      },
  },
  {
    path: "/order_item",
    name: "Items do Pedido",
    component: Crud_order_item,
    children: [
      {
        path: "/detail/:id",
        name: "Detalhes de Items do Pedido",
        component: Detail_order_item,
      },
      {
        path: "/list",
        name: "Lista de Items do Pedido",
        component: List_order_item,
      },
      {
        path: ":id",
        name: "Form de Items do Pedido",
        component: Form_order_item,
      },
  },
  {
    path: "/cart_item",
    name: "Item do Carrinho",
    component: Crud_cart_item,
    children: [
      {
        path: "/detail/:id",
        name: "Detalhes de Item do Carrinho",
        component: Detail_cart_item,
      },
      {
        path: "/list",
        name: "Lista de Item do Carrinho",
        component: List_cart_item,
      },
      {
        path: ":id",
        name: "Form de Item do Carrinho",
        component: Form_cart_item,
      },
  },
  {
    path: "/order_status",
    name: "Status de Pedido",
    component: Crud_order_status,
    children: [
      {
        path: "/detail/:id",
        name: "Detalhes de Status de Pedido",
        component: Detail_order_status,
      },
      {
        path: "/list",
        name: "Lista de Status de Pedido",
        component: List_order_status,
      },
      {
        path: ":id",
        name: "Form de Status de Pedido",
        component: Form_order_status,
      },
  },
  {
    path: "/product_subcategory",
    name: "Subcategoria  de Produtos",
    component: Crud_product_subcategory,
    children: [
      {
        path: "/detail/:id",
        name: "Detalhes de Subcategoria  de Produtos",
        component: Detail_product_subcategory,
      },
      {
        path: "/list",
        name: "Lista de Subcategoria  de Produtos",
        component: List_product_subcategory,
      },
      {
        path: ":id",
        name: "Form de Subcategoria  de Produtos",
        component: Form_product_subcategory,
      },
  },
  {
    path: "/stock",
    name: "Estoque",
    component: Crud_stock,
    children: [
      {
        path: "/detail/:id",
        name: "Detalhes de Estoque",
        component: Detail_stock,
      },
      {
        path: "/list",
        name: "Lista de Estoque",
        component: List_stock,
      },
      {
        path: ":id",
        name: "Form de Estoque",
        component: Form_stock,
      },
  },
  {
    path: "/offer",
    name: "Promoção",
    component: Crud_offer,
    children: [
      {
        path: "/detail/:id",
        name: "Detalhes de Promoção",
        component: Detail_offer,
      },
      {
        path: "/list",
        name: "Lista de Promoção",
        component: List_offer,
      },
      {
        path: ":id",
        name: "Form de Promoção",
        component: Form_offer,
      },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

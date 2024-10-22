import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/homeViews.vue';
import Products from '../views/productsViews.vue';
import Cart from '../views/cartViews.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

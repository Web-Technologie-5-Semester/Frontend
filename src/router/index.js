import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/homeViews.vue';
import Products from '../views/productsViews.vue';
import Cart from '../views/cartViews.vue';
import Impressum from '../views/impressumViews.vue';

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
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/loginView.vue'), // Gehen Sie sicher, dass LoginView.vue existiert
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

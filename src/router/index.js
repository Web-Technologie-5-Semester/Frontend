import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/homeViews.vue';
import Products from '../views/productsViews.vue';
import Cart from '../views/cartViews.vue';
import Impressum from '../views/impressumViews.vue';
import Registration from '../views/registrationView.vue';
import ArticleView from '@/components/articleView.vue';
import ProductsViews from '@/views/productsViews';

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
    path: '/register',
    component: Registration,
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/loginView.vue'), // Gehen Sie sicher, dass LoginView.vue existiert
  },

  {
    path: '/',
    name: 'productsViews',
    component: ProductsViews
  },
  {
    path: '/product/:id',
    name: 'articleView',
    component: ArticleView
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/homeViews.vue';
import Products from '../views/productsViews.vue';
import Cart from '../views/cartViews.vue';
import Impressum from '../views/impressumViews.vue';
import Registration from '../views/registrationView.vue';
import ArticleView from '@/components/articleView.vue';
import ProductsViews from '@/views/productsViews';
import CheckoutView from '@/views/checkoutView.vue';
import OfferBooksView from '@/views/offerBooksView.vue';
import WelcomePage from "@/components/WelcomePage.vue";
import SearchView from '../views/searchView.vue';


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
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView,
  },
  {
    path: '/offerBooksView',
    name: 'OfferBooksView',
    component: OfferBooksView,
  },
  {
    path: "/welcomePage",
    name: "WelcomePage",
    component: WelcomePage
  },
  {
    path: "/search",
    name: "SearchResults",
    component: SearchView,
    props: (route) => ({ searchQuery: route.query.q }),
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

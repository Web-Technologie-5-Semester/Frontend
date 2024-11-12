import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
  </div>
  <div id="app">
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/header.vue';
import FooterComponent from './components/footer.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent, FooterComponent
  },
};
</script>

<style>
/* Globale Stile */
</style>

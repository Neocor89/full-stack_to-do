// import Vuetify from 'vuetify';
// import Vue from 'vue';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
// import { sync } from 'vuex-router-sync';
// Vue.use(Vuetify);
createApp(App).use(store).use(router).mount('#app');

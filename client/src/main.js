// import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
// import Vue from 'vue';
// import Vuetify from 'vuetify';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Vue.use(Vuetify);
// import { sync } from 'vuex-router-sync';
// index.js or main.js
createApp(App).use(store).use(router).mount('#app');

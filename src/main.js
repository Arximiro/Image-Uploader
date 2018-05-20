import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store'; // Webpack automatically looks for index.js so no need to specify it
import AuthHandler from './components/AuthHandler';

Vue.use(VueRouter) // Tells Vue library about the existence of VueRouter

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/oauth2/callback', component: AuthHandler } // When user visits this route display this component
  ]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

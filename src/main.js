import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import store from './store'; // Webpack automatically looks for index.js so no need to specify it
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';


Vue.use(VueRouter) // Tells Vue library about the existence of VueRouter

export const router = new VueRouter({
  mode: 'history', // Tells VueRouter to use BrowserRouter mode instead of the default HashRouter mode.
  routes: [
    { path: '/oauth2/callback', component: AuthHandler }, // When user visits this route display this component
    { path: '/upload', component: UploadForm },
    { path: '/', component: ImageList }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

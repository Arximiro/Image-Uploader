import Vue from 'vue';
import App from './App';
import store from './store'; // Webpack automatically looks for index.js

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

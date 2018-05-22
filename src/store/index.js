import Vuex from 'vuex';
import Vue from 'vue';

import auth from './modules/auth';
import images from './modules/images'

Vue.use(Vuex); // This pt.1 in how you connect Vuex to Vue. pt.2 is in Main.js where you register it on the Vue instance.

export default new Vuex.Store({
  modules: {
    auth,
    images
  }
});

// The Store is a collection of different modules that can be interfaced with the Vue code I write.

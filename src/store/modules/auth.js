import api from '../../api/imgur';
import qs from 'qs';

const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  isLoggedIn: state => state.token != null
};

const actions = {
  login: () => api.login(), // redirects the user's browser to the authenticate URL so they can get authenticated
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace('#', '')); // removes the # from the beginning of the hash passed in via AuthHandler

    commit('setToken', query.access_token) // passes the token pulled from the url into setToken
    window.localStorage.setItem('imgur_token', query.access_token);
  },
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  } 

};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,  // same as state: state - since they are the same name you can shorten it to just state
  getters,
  actions,
  mutations
}

// store.commit or ({commit}) is similar to this.setState() in React.
// It appears the actions object gets passed the Vuex Store, and from that you can destructure the commit method.
// The 1st arg that gets passed to all actions is an object that contains a buch of helper methods.

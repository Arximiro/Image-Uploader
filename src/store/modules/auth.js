import api from '../../api/imgur';
import qs from 'qs';

const state = {
  token: null
};

const getters = {
  isLoggedIn: state => state.token != null
};

const actions = {
  login: () => api.login(),
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace('#', '')); // removes the # from the beginning of the hash passed in via AuthHandler

    commit('setToken', query.access_token) // passes the token pulled from the url into setToken
  },
  logout: ({ commit }) => commit('setToken', null)

};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}

// store.commit or ({commit}) is similar to this.setState() in React.
// It appears the actions object gets passed the Vuex Store, and from that you can destructure the commit method.
// The 1st arg that gets passed to all actions is an object that contains a buch of helper methods.

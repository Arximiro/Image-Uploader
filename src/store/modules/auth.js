import api from '../../api/imgur';

const state = {
  token: null
};

const getters = {
  isLoggedIn: state => state.token != null
};

const actions = {
  login: () => api.login(),
  // finalizeLogin:,
  logout: ({ commit }) => commit('setToken', null)

};

const mutations = {
  setToken: (state, token) => {
    stake.token = token;
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

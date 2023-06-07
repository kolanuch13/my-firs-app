import { loginUser, signInUser, logoutUser } from "../../services/auth.service";

const initialState = {
  user: null,
  token: "",
};

export default {
  namespaced: true,
  state: { ...initialState },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.token);
    },
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearUserData(state) {
      Object.assign(state, { ...initialState });
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await loginUser(payload);
      const { user, token } = data;

      commit("setUserData", user);
      commit("setToken", token);
    },
    async signIn({ commit }, payload) {
      const { data } = await signInUser(payload);
      const { user, token } = data;

      commit("setUserData", user);
      commit("setToken", token);
    },
    async logoutUser({commit}) {
      await logoutUser();
      commit('clearUserData')
    },
  },
};

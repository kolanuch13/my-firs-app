import { loginUser, signInUser } from "../../services/authService";

const initialState = {
  user: null,
  token: "",
};

export default {
  namespaced: true,
  state: { ...initialState },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },
    setToken(state, token) {
      state.token = token;
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
  },
};

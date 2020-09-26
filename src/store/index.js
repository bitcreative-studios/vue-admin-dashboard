import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Initial State

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  localStorage.setItem("isDarkMode", "true");
}

const USER_DARK_MODE = localStorage.getItem("isDarkMode") === true;
const state = {
  isDarkMode: USER_DARK_MODE,
};

// Getters
const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  },
};

// Mutations
const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode) {
      state.isDarkMode = false;
      localStorage.setItem("isDarkMode", "false");
    } else {
      state.isDarkMode = true;
      localStorage.setItem("isDarkMode", "true");
    }
  },
};

const actions = {
  triggerDarkMode(context) {
    context.commit("toggleDarkMode");
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});

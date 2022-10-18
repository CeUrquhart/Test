import Vue from "vue";
import Vuex from "vuex";

// modules
import lilbig from "./modules/lilbig";
import deez from "./modules/deez";
import blog from "./modules/blog";
//import router from "../routes/starterRouter";

Vue.use(Vuex);

export const store = new Vuex.Store({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    lilbig,
    deez,
    blog
  }
});

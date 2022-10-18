import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import { store } from "./store/index";
import VueConfetti from "vue-confetti";
import moment from "moment";

Vue.config.productionTip = false;
Vue.use(moment);
Vue.use(Argon);
Vue.use(VueConfetti);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

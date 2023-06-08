import "./assets/scss/index.scss";
import App from "./App.vue";
import router from "./router";
import store from './store'
import Vue from "vue";
import VueRouter from "vue-router";
import Notifications from "vue-notification";
import Paginate from 'vuejs-paginate'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Notifications);
// eslint-disable-next-line vue/multi-word-component-names
Vue.component('paginate', Paginate);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");

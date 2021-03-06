import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import "./plugins/element.js";

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: h => h(App),
  router
}).$mount('#app')

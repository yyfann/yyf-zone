import Vue from "vue";

import './plugins/http'
import './plugins/global-varies'

import App from "./App.vue";
import router from "./router/router";

window.Vue = Vue;


new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");

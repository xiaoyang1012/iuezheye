import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入elementui框架
import "./lib/element-ui";
import "./assets/less/reset.less";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

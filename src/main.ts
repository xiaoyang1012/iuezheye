import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyload from 'vue-lazyload'
// 引入elementui框架
import "./lib/element-ui";
import "./assets/less/reset.less";
Vue.config.productionTip = false;
Vue.use(VueLazyload)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

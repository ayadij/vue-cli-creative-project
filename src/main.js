import Vue from "vue";
import App from "./App.vue";

import { MdButton, MdDrawer } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";

Vue.use(MdButton);
Vue.use(MdDrawer);

new Vue({
  el: "#app",
  render: h => h(App)
});

import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import VueScrollReveal from "vue-scroll-reveal";
import { routes } from "./routes";

import { MdButton, MdDrawer, MdCard } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdCard);
Vue.use(VueResource);
Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: "50px"
});

Vue.http.options.root = "https://ayadrop-6924a.firebaseio.com/";

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

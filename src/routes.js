import Home from "./components/Menu/index.vue";
import Delivery from "./components/CallUs/index.vue";
import Newsletter from "./components/Newsletter/index.vue";

export const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/delivery",
    component: Delivery
  },
  {
    path: "/newsletter",
    component: Newsletter
  }
];

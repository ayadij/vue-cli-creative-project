import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import About from '../About.vue'
import Contact from '../Contact.vue'; //cart

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  
  {
      path: '/Contact',
      name: 'Contact',
      component: Contact
  },
  //cart
  {
    path: '/About/',
    name: 'About',
    component: About,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
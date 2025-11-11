import { createRouter, createWebHashHistory } from 'vue-router'
import Quotes from '../views/RandomQuotes.vue'
//import About from '../views/AboutView.vue'
//import Contact from '../views/Contact.vue'

const routes = [
  {
    path: "/",
    name: "quotes",
    component: Quotes,
  },
  {
    path: "/about",
    name: "About",
    //component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: '/:pathMatch(.*)*',
    name: "NotFound",
    component: ()=> import('@/views/NotFound.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link'
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import Urls from '../views/Urls.vue'
import CreateUrl from "../views/CreateUrl.vue";
import UrlDetails from "../views/UrlDetails.vue";
import Redirect from "../views/Redirect.vue";
import ErrorPage from "../views/ErrorPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/urls',
    name: 'urls',
    component: Urls
  },
  {
    path: '/urls/:id',
    name: 'details',
    component: UrlDetails
  },
  {
    path: '/create',
    name: 'create',
    component: CreateUrl,
  },
  {
    path:'/error',
    name: 'error',
    component: ErrorPage,
  } ,
  {
    path: "*",
    name: 'redirect',
    component: Redirect,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue' 
import VueRouter from 'vue-router' 
import homePage from '@/views/home-page' 
import search from '@/views/search.vue' 
Vue.use(VueRouter) 

const routes = [
  {
    path: '/',
    component: homePage
  },
  {
    path: '/search',
    component: search
  },
] 

const router = new VueRouter({ routes }) 

export default router 

import Vue from 'vue' 
import axios from 'axios'
import VueAxios from 'vue-axios'
import app from './app.vue' 
import router from './router' 
import store from './store' 

import vSelect from "vue-select" 


import '@/assets/styles/global.scss' 

import { getRandomColor } from '@/services/utils.service.js' 

Vue.use(VueAxios, axios)

Vue.config.productionTip = false 

Vue.directive('colorful', {
  // When the bound element is inserted into the DOM...
  inserted(el) {
    el.addEventListener('keyup', () => {
      el.style.backgroundColor = getRandomColor() 
    }) 

  }
}) 

new Vue({
  router,
  store,
  vSelect,
  render: h => h(app)
}).$mount('#app') 




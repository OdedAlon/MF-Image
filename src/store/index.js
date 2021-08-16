import Vue from 'vue' 
import Vuex from 'vuex' 
import imgModule from '@/store/modules/img.module.js' 

Vue.use(Vuex) 

export default new Vuex.Store({
  strict: true,
  state: {
   
  },
  modules: {
    imgModule
  }
}) 

/*
 * @Author: your name
 * @Date: 2020-06-29 20:11:06
 * @LastEditTime: 2020-06-30 09:11:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\src\index.js
 */ 


 import customSwitch from './components/custom-switch.vue'

 export default customSwitch

 if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('vue-custom-switch', customSwitch)
  }
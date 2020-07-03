<!--
 * @Author: your name
 * @Date: 2020-06-29 18:01:10
 * @LastEditTime: 2020-06-30 09:14:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test1\src\App.vue
--> 
<template>
  <div id="app">
    <custom-switch />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CustomSwitch from './components/custom-switch.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CustomSwitch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

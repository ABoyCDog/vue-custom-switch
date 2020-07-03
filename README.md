<!--
 * @Author: your name
 * @Date: 2020-06-29 18:01:29
 * @LastEditTime: 2020-07-03 09:37:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-custom-switch\README.md
--> 
# vue-custom-switch

## Description
自定义switch组件

## 安装
```
npm install vue-custom-switch
```

## 使用
```
<template>
<vue-custom-switch />

<script>
import vue-custom-switch from 'vue-custom-switch'
    ...
components: {vue-custom-switch}

<style>
/*引入特殊样式*/
@import 'vue-custom-switch/dist/vue-custom-switch.css';
```
> 注意要引入样式，否则无法出效果

## 打包
打包使用命令 npm run build-bundle

## 例子
```js
<template>
  <div id="app">
    <custom-switch />
    <router-view/>
  </div>
</template>

<script>
import CustomSwitch from 'vue-custom-switch'
export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    CustomSwitch
  }
}
</script>

<style>
@import 'vue-custom-switch/dist/vue-custom-switch.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

### 代码详见
See [git](https://github.com/ABoyCDog/vue-custom-switch/).

### 存在问题
~~打包完后，样式无法跟随，package.json中添加style字段不生效，目前只是在打包文件中手动引入css文件~~


~~打包完dist里已经有css包，但是没有跟js模块关联上，也就是install后组件没有样式的问题~~


~~已解决，虽然也不完美~~
在引用的组件引入样式文件，详细见上 例子 处
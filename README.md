<!--
 * @Author: your name
 * @Date: 2020-06-29 18:01:29
 * @LastEditTime: 2020-07-03 09:03:50
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
<script>
import vue-custom-switch from 'vue-custom-switch'
...
components: {vue-custom-switch}

<template>
<vue-custom-switch />
```

## 打包
打包使用命令 npm run build-bundle

### 代码详见
See [git](https://github.com/ABoyCDog/vue-custom-switch/).

### 存在问题
~~打包完后，样式无法跟随，package.json中添加style字段不生效，目前只是在打包文件中手动引入css文件~~

  打包完dist里已经有css包，但是没有跟js模块关联上，也就是install后组件没有样式的问题
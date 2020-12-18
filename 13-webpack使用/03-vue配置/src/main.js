// CommonJS模块化规范
const {add, mul} = require('./js/math.js')
console.log(add(20, 30))
console.log(mul(20, 30))

// ES6模块化规范
import {name, age} from './js/info'
console.log('name --- ', name)
console.log('age  --- ', age)

// 依赖css文件
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')


// 使用vue进行开发
import Vue from 'vue'
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hellow WebPac'
  }
})
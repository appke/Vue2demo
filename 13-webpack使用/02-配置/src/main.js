// CommonJS模块化规范
const {add, mul} = require('./math.js')
console.log(add(20, 30))
console.log(mul(20, 30))

// ES6模块化规范
import {name, age} from './info'
console.log('name --- ', name)
console.log('age  --- ', age)
// 2个参数
const sum = (num1, num2) => {
  return num1 + num2
}
console.log(sum(3, 8))


// 1个参数
const power = num => {
  return num * num
}
const power2 = num => num*num
console.log(power(9))
console.log(power2(10))


// 没有参数
const test = () => {
  console.log('Hello World!')
  console.log('Arrow Function')
}
const test2 = () => console.log('Arrow Function')
test()
// log执行后返回结果 undefined
console.log(test2())
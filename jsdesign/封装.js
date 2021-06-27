// 1. 使用let 和 const 创建作用域
// 2. 使用函数创建作用域
const myObject = (function () {
  const __name = 'sven'
  return {
    getName: function () {
      return __name
    }
  }
}())

console.log(myObject.getName())// sven
console.log(myObject.__name)// undefined

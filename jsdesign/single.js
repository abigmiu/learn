// // 单例模式
// const Singleton = function (name) {
//   this.name = name
//   this.instance = null
// }

// Singleton.prototype.sayName = function () {
//   console.log(this.name)
// }

// Singleton.getInstance = function (name) {
//   // this --> Singleton
//   if (!this.instance) {
//     this.instance = new Singleton(name)
//   }
//   return this.instance
// }

// const a = Singleton.getInstance('sven')
// const b = Singleton.getInstance('alice')

// console.log(a === b)
// a.sayName()
// b.sayName()

// // 透明的单例模式
// const CreateDiv = (function () {
//   let instance

//   const CreateDiv = function (html) {
//     if (instance) {
//       return instance
//     }
//     this.html = html
//     this.init()
//     return instance = this
//   }

//   CreateDiv.prototype.init = function () {
//     this.html = '123'
//   }

//   return CreateDiv
// })()

// const a1 = new CreateDiv('aphach')
// const b1 = new CreateDiv('node')
// console.log(a1 === b1)

const getSingle = function (fn) {
  let result
  return function () {
    console.log('getSingle', this)
    return result || (result = fn.call(this, arguments))
  }
}

const createArr = function () {
  console.log('i am arr')
}

const createSignleArr = getSingle(createArr)

createSignleArr()

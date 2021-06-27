// 定义一系列的算法， 把他们封装起来，并且是他们可以相互替换
// const calculateBonus = function (performanceLeve, salary) {
//   if (performanceLeve === 's') {
//     return salary * 4
//   }

//   if (performanceLeve === 'a') {
//     return salary * 3
//   }

//   if (performanceLeve === 'b') {
//     return salary * 2
//   }
// }

// const result = calculateBonus('b', 2000)
// console.log(result)

// 把算法封装到函数里面

// const performanceS = function (salary) {
//   return salary * 4
// }

// 策略模式至少两部分，
// 1. 策略类， 封装具体的算法
// 2. 环境类 context 用户输入

const performanceS = function () {}
performanceS.prototype.calculate = function (salary) {
  return salary * 4
}

const performanceA = function () {}
performanceA.prototype.calculate = function (salary) {
  return salary * 3
}

const performanceB = function () {}
performanceB.prototype.calculate = function (salary) {
  return salary * 2
}

// 奖金类
const Bonus = function () {
  this.salary = null
  this.strategy = null
}

Bonus.prototype.setSalary = function (salary) {
  this.salary = salary
}

Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy
}

Bonus.prototype.getBonus = function () {
  return this.strategy.calculate(this.salary)
}

// js版本
const strategies = {
  s: (salary) => {
    return salary * 4
  },
  a: (salary) => {
    return salary * 3
  },
  b: (salary) => {
    return salary * 2
  }

}

const calculateBonusJS = function (level, salary) {
  return strategies[level](salary)
}

console.log(calculateBonusJS('s', 19999))

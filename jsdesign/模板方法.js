// 只需继承就能实现的模式
// 两个部分。抽象父类， 具体实现子类
// 在抽象父类中封装子类的算法框架

// 父类
const Beverage = function () {}

Beverage.prototype.boilWater = function () {
  console.log('把水煮沸')
}

Beverage.prototype.brew = function () { }

Beverage.prototype.pourlnCup = function () {}

Beverage.prototype.addConduiments = function () {}

Beverage.prototype.init = function () {
  this.boilWater()
  this.brew()
  this.pourlnCup()
  this.addConduiments()
}

// 子类coffee
const Coffee = function () {}
Coffee.prototype = new Beverage()

Coffee.prototype.brew = function () {
  console.log('用沸水冲咖啡')
}
Coffee.prototype.pourlnCup = function () {
  console.log('把咖啡倒进杯子')
}
Coffee.prototype.addConduiments = function () {
  console.log('加糖和牛奶')
}

const coffee = new Coffee()
coffee.init()

//  Beverage.prototype.init 是模板方法, 里面安顺序执行了一系列操作

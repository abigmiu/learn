const Flower = function () {}

const xiaoming = {
  sendFlower: function (target) {
    const flower = new Flower()
    target.receiveFlower(flower)
  }
}

const B = {
  receiveFlower: function (flower) {
    A.listenGoodMood(function () {
      A.receiveFlower(flower)
    })
  }
}

const A = {
  receiveFlower: function (flower) {
    console.log('received flower')
  },
  listenGoodMood: function (fn) {
    setTimeout(function () {
      fn()
    }, 3000)
  }
}

xiaoming.sendFlower(B)

// 缓存代理
const mult = function () {
  console.log('开始计算乘积')
  let a = 1

  for (let i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i]
  }

  return a
}

console.log(mult(2, 3))

// 缓存代理函数
const proxyMult = (function () {
  // 缓存功能由代理函数实现
  const cache = []
  return function () {
    const args = Array.prototype.join.call(arguments, ',')

    if (args in cache) {
      return cache[args]
    }

    console.log(args)
    const result = cache[args] = mult.apply(this, arguments)
    return result
  }
})()

proxyMult(1, 2, 3, 4)
proxyMult(1, 2, 3, 4)

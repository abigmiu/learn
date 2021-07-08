// 谁充当发布者
// 给发布者添加一个缓存列表， 用于存放回调函数以便通知订阅者
// 便利缓存列表，触发里面的订阅者的回调函数

// const salesOffices = {} // 售楼处

// salesOffices.clientList = [] // 缓存列表，放订阅者的回调函数

// salesOffices.listen = function (fn) {
//   this.clientList.push(fn)
// }

// salesOffices.trigger = function () {
//   this.clientList.forEach((fn) => {
//     fn.apply(this, arguments
//     )
//   })
// }

// salesOffices.listen(function (price, squareMeter) {
//   console.log('price', price)
//   console.log('squareMeter', squareMeter)
// })

// salesOffices.listen(function (price, squareMeter) {
//   console.log('price2', price)
//   console.log('squareMeter2', squareMeter)
// })

// salesOffices.trigger(200, 88)
// salesOffices.trigger(300, 88)

// 通用写法
const events = {
  clientList: [],
  listen: function (key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn)
  },
  trigger: function () {
    const key = Array.prototype.shift.call(arguments)

    const fns = this.clientList[key]

    if (!fns || fns.length === 0) {
      return false
    }

    fns.forEach(fn => fn.apply(this, arguments))
  },

  remove: function (key, fn) {
    const fns = this.clientList[key]

    if (!fns) {
      return false
    }

    if (!fn) {
      fns && (fns.length = 0)
    } else {
      // 只删除对应函数
      const index = fns.findIndex(_fn => _fn === fn)
      fns.splice(index, 1)
    }
  }
}

const installEvent = function (obj) {
  for (const i in events) {
    obj[i] = events[i]
  }
}

const salesOffices = {}
installEvent(salesOffices)

salesOffices.listen('88', function (price) {
  console.log('88')
})

let fn1
salesOffices.listen('200', fn1 = function (price) {
  console.log('200', price)
})

salesOffices.remove('200', fn1)
salesOffices.trigger('200', 888)

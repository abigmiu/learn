const order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500元定金')
  } else {
    order200(orderType === 2 && pay === true)
  }
}

const order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200元定金')
  } else {
    orderNormal(orderType, pay, stock)
  }
}

const orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买')
  } else {
    console.log('没有手机了')
  }
}

order500(1, true, 500)

const Chain = function (fn) {
  this.fn = fn
  this.successor = null
}

Chain.prototype.setNextSuccessor = function (successor) {
  this.successor = successor
  return this.successor
}

Chain.prototype.passRequest = function () {
  const ret = this.fn.apply(this, arguments)

  if (ret === 'nextSuccessor') {
    return this.successor && this.successor.passRequest.apply(this.successor, arguments)
  }
  return ret
}

const chainOrder500 = new Chain(order500)
const chainOrder200 = new Chain(order200)
const chainOrderNormal = new Chain(orderNormal)

chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

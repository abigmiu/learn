// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('successs')
//   }, 1000)
// })

// p1.then((res) => {
//   console.log(res)
// }, (err) => {
//   console.log(err)
// })

// 自定义promise
class MyPromise {
  constructor (executor) {
    // 执行函数
    this.executor = executor

    // 状态常量
    this.PENDING = 'pending'
    this.FULLFILLED = 'fullfilled'
    this.REJECTED = 'rejected'

    // 当前状态
    this.state = this.PENDING
    this.successResult = undefined
    this.errorReason = undefined

    // resolve 和 reject 执行队列
    this._resolveCallbacks = []
    this._rejectCallbacks = []

    const resolveFunction = (value) => {
      console.log('resolve Funtion')
      if (this.state === this.PENDING) {
        console.log('pending to resolve')
        this.state = this.FULLFILLED
        this.successResult = value
        this._resolveCallbacks.forEach(fn => fn())
      }
    }
    const rejectFunction = (error) => {
      if (this.state === this.PENDING) {
        this.state = this.REJECTED
        this.errorReason = error
        this._rejectCallbacks.forEach(fn => fn())
      }
    }
    executor(resolveFunction, rejectFunction)
  }

  then (onFullfilled, onRejected) {
    if (this.state === this.FULLFILLED) {
      onFullfilled(this.successResult)
    }

    if (this.state === this.REJECTED) {
      onRejected(this.errorReason)
    }

    if (this.state === this.PENDING) {
      this._resolveCallbacks.push(onFullfilled(this.successResult))
      this._rejectCallbacks.push(onRejected(this.errorReason))
    }
  }
}

const mp1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
mp1.then(res => {
  console.log('res')
  console.log(res)
}, err => {
  console.log('err')
  console.log(err)
})

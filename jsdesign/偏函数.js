// 缓存函数
const memoize = function (func) {
    let cache = Object.create(null)
    return (...key) => {

        // 以数组作为key， key会变成字符串
        if (!cache[key]) {
            console.log('not cache')
            console.log(cache[key] = func.apply(null, key))
            return (cache[key] = func.apply(null, key))
        } else {
            console.log('cache', cache[key])
            return cache[key]
        }
    }
}

function add (a, b){
    return a + b
}

const calc = memoize(add)
calc(10, 20)
calc(10, 20)

console.log('/************************---------*********************************/')

// 科里化

/**
 * 待科里化的函数
 */
function threeAdd(a, b, c) {
    return a + b + c
}

/**
 * 科里化
 * @param {*} fn 待科里化的函数
 */
function curry(fn) {
    const argLimit = fn.length // 待科里化的函数的形参个数
    let params = []
    return function _curry(...args) {
        params = params.concat(args)
        if (argLimit <= params.length) {
            const tempAry = [...params]
            params = [] // 参数到个数的时候清空，使下一次可用
            return fn.apply(null, tempAry)
        } else {
            return _curry
        }
    }
}

const curriedFun = curry(threeAdd)

console.log(curriedFun(1, 2)(3))
console.log(curriedFun(4)(5)(6))

console.log('/************************---------*********************************/')
// 偏函数
// 简单描述，就是把一个函数的某些参数先固化，也就是设置默认值，返回一个新的函数，在新函数中继续接收剩余参数，这样调用这个新函数会更简单。

let multi = (x, y) => x * y

let double = multi.bind(null, 2)
console.log(double(3))
console.log(double(5))


function partial(func, ...argsBound) {
    return function (...args) {
        return func.apply(this, argsBound.concat(args))
    }
}

const partialMultii = partial(multi, 5)
console.log(partialMultii(5))

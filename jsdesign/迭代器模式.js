// 内部迭代器， 迭代规则已被提前定义

const each = function (array, callback) {
  const length = array.length

  for (let i = 0; i < length; i++) {
    callback(array[i], i, array)
  }
}

each([1, 2, 3, 4], function (item, index) {
  console.log(item, index)
})

// 外部迭代器
const Iterator = function (obj) {
  let current = 0

  const getCurrentItem = function () {
    return obj[current]
  }

  const next = function () {
    current += 1
    return getCurrentItem()
  }

  const isDone = function () {
    return current >= obj.length
  }

  return {
    next,
    isDone,
    getCurrentItem
  }
}

const itetator = Iterator([3, 2, 1])
console.log(itetator.next())
console.log(itetator.next())
console.log(itetator.next())
console.log(itetator.next())
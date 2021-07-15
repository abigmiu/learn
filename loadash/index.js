const loadash = function () {}
const _ = new loadash()

loadash.prototype.chunk = function (arr, size = 1) {
  if (arr.length === 0) {
    throw new Error('数组不能为空')
  }

  const chunkArr = []

  const length = arr.length
  const range = length / size

  for (let i = 0; i < range; i++) {
    chunkArr.push(arr.slice(i * range, i * range + size))
  }

  return chunkArr
}

loadash.prototype.compact = function (arr) {
  return arr.filter(item => !!item)
}

loadash.prototype.connect = function (arr) {
  const others = Array.prototype.slice.call(arguments, 1)

  const newArr = [...arr]

  others.forEach(item => {
    if (Array.isArray(item)) {
      newArr.push(...item)
    } else {
      newArr.push(item)
    }
  })

  return newArr
}

loadash.prototype.difference = function (arr, values) {
  if (values.length === 0) {
    return arr
  }

  return arr.filter(item => !values.includes(item))
}

loadash.prototype.differenceBy = function (arr, values, iteratee) {
  if (values.length === 0 || !iteratee) {
    return _.difference(arr)
  }

  const floorValues = values.map(item => iteratee(item))
  const floorArr = arr.map(item => iteratee(item))

  return arr.filter((item, index) => !floorValues.includes(floorArr[index]))
}

loadash.prototype.differenceWith = function (arr, values, comparator) {
  if (values.length === 0 || !comparator) {
    return _.difference(arr)
  }

  return comparator(arr, values)
}

loadash.prototype.drop = function (arr, n = 1) {
  return arr.slice(n)
}

loadash.prototype.dropRight = function (arr, n = 1) {
  if (n <= 0) {
    return arr
  }
  return arr.slice(0, -n)
}

const result = _.dropRight([1, 2, 3], 0)
console.log(result)

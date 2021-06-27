const getSingle = function (fn) {
  let ret

  return function () {
    return ret || (ret = fn.apply(this, arguments))
  }
}

const getScipt = getSingle(function () {
  return [1, 2, 4]
})

const script1 = getScipt()
const script2 = getScipt()

console.log(script1 === script2)

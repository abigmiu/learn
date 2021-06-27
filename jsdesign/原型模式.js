// 找到一个对象， 通过克隆来创建一个一模一样的对象
const Plane = function () {
  this.blood = 100
  this.attackLevel = 1
  this.defenseLevel = 1
}

const plane = new Plane()
plane.blood = 500
plane.attackLevel = 10
plane.defenseLevel = 7

const clonePlane = Object.create(plane)
console.log(clonePlane)

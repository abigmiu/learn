// 动态给某个对象添加一些额外的职责， 而不会影响从这个类中派生的其他对象

// 模拟传统面向对象语言
{
  const Plane = function () {}

  Plane.prototype.fire = function () {
    console.log('发射普通子弹')
  }

  const MissileDecorator = function (plane) {
    this.plane = plane
  }

  MissileDecorator.prototype.fire = function () {
    this.plane.fire()
    console.log('发射导弹')
  }

  const AtomDecorator = function (plane) {
    this.plane = plane
  }

  AtomDecorator.prototype.fire = function () {
    this.plane.fire()
    console.log('发射原子弹')
  }

  let plane = new Plane()
  plane = new MissileDecorator(plane)
  plane = new AtomDecorator(plane)

  plane.fire()

  console.dir(plane)
}

// javascript 装饰者
{
  const plane = {
    fire() {
      console.log('发射普通子弹')
    }
  }

  const missileDecorator = function () {
    console.log('发射导弹')
  }

  const atomDecorator = function () {
    console.log('发射原子弹')
  }

  const fire1 = plane.fire
  plane.fire = function () {
    fire1()
    missileDecorator()
  }

  const fire2 = plane.fire
  plane.fire = function () {
    fire2()
    atomDecorator()
  }

  plane.fire()
}

// aop 装饰函数
{
  Function.prototype.before = function (beforefn) {
    const __self = this
    return function () {
      beforefn.apply(this, arguments)
      return __self.apply(this, arguments)
    }
  }

  Function.prototype.after = function(afterfn) {
    const __self = this
    return function() {
      const ret = __self.apply(this, arguments)
      afterfn.apply(this, arguments)
      return ret
    }
  }
}
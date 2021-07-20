// 用于性能优化的模式
// 运用共享技术支持大量细粒度的对象

// 不使用享元模式
{
  const Model = function (sex, underwear) {
    this.sex = sex
    this.underwear = underwear
  }
  Model.prototype.takePhoto = function () {
    console.log('sex ' + this.sex + '---underwear ' + this.underwear)
  }

  for (let i = 1; i <= 50; i++) {
    const maleModel = new Model('male', 'underwear' + i)
    maleModel.takePhoto()
  }

  for (let i = 1; i <= 50; i++) {
    const femaleModel = new Model('female', 'underwear' + i)
    femaleModel.takePhoto()
  }
}
// 使用享元模式
{
  const Model = function (sex) {
    this.sex = sex
  }

  Model.prototype.takePhoto = function () {
    console.log('sex ' + this.sex + '///underwear' + this.underwear)
  }

  const maleModel = new Model('male')
  const femaleModel = new Model('female')

  for (let i = 0; i <= 50; i++) {
    maleModel.underwear = 'underwear' + i
    maleModel.takePhoto()
  }

  for (let i = 0; i <= 50; i++) {
    femaleModel.underwear = 'underwear' + i
    femaleModel.takePhoto()
  }
}

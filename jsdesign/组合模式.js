// 用小的子对象构建更大的对象
// 通过对象的多态性，使用户对单个对象和组合对象的使用具有1一致性

// ex 文件夹扫描
const Folder = function (name) {
  this.name = name
  this.files = []
}

Folder.prototype.add = function (file) {
  this.files.push(file)
}

Folder.prototype.scan = function () {
  console.log('begin scan the folder' + this.name)
  this.files.forEach(item => item.scan())
}

const File = function (name) {
  this.name = name
}

File.prototype.add = function () {
  throw new Error('can\'t add more file')
}

File.prototype.scan = function () {
  console.log('begin scan the file' + this.name)
}

const folder = new Folder('leran datum')
const folder1 = new Folder('javascript')
const folder2 = new Folder('jquery')

const file1 = new File('javascript design and pratice')
const file2 = new File('be well up in jquery')
const file3 = new File('refactoring and patters')

folder1.add(file1)
folder2.add(file2)

folder.add(folder1)
folder.add(folder2)
folder.add(file3)

const folder3 = new Folder('Nodejs')
const file4 = new File(' explain profound theories in simple language')

folder3.add(file4)

const file5 = new File('javascript lanuage')
folder.add(folder3)
folder.add(file5)

folder.scan()

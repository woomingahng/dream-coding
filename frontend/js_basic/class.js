// class
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  speak() {
    console.log(`${this.name}: hello`)
  }
}
const wily = new Person('wily', 30)
console.log(wily.name)
console.log(wily.age)
wily.speak()

// getter setter
class User {
  constructor(firstName, lastName, age) {
    console.log(1)
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  get age() {
    return this._age
  }
  set age(age) {
    this._age = age < 0 ? 0 : age
  }
}
const user1 = new User('steve', 'jobs', 40)
console.log(user1.age)

// public private
class Expriment {
  publicfield = 2
  #privatefield = 0
}
const ex = new Expriment()
console.log(ex.publicfield)
console.log(ex.privatefield)

// static
class Article {
  static publisher = 'Dream coding'
  constructor(articleNumber) {
    this.articleNumber = articleNumber
  }
  static printPublisher() {
    console.log(Article.publisher)
  }
}
const ar1 = new Article(1)
const ar2 = new Article(2)
console.log(Article.publisher)
Article.printPublisher()

// inheritance
class Shape {
  constructor(w, h, c) {
    this.w = w
    this.h = h
    this.c = c
  }
  draw() {
    console.log(`drawing ${this.c} color of`)
  }
  getArea() {
    return this.w * this.h
  }
}
class Rectangle extends Shape {}
const r = new Rectangle(2, 2, 'blue')
r.draw()
console.log(r.getArea())
class Triangle extends Shape {
  draw() {
    console.log(`ㅁ`)
  }
  getArea() {
    return (this.w * this.h) / 2
  }
}
const t = new Triangle(2, 2, 'red')
t.draw()
console.log(t.getArea())

// class checking
console.log(r instanceof Rectangle)
console.log(t instanceof Rectangle)
console.log(t instanceof Triangle)
console.log(t instanceof Shape)
console.log(t instanceof Object)

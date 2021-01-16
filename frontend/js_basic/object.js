// object {key: value}
const wily = {
  name: 'wily',
  age: 30,
}
function print(person) {
  console.log(person.name)
  console.log(person.age)
}
print(wily)

// computed properties
console.log(wily.name)
console.log(wily['name'])
function printValue(obj, key) {
  console.log(obj[key])
}
printValue(wily, 'name')

// shorthand
const person = makePerson('wily', 30)
function makePerson(name, age) {
  return { name, age }
}
console.log(person)

// constructor function
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
const person2 = new Person('wily', 40)
console.log(person2)

// in operation
console.log('name' in wily)
console.log('age' in wily)
console.log('random' in wily)

// for in for of
for (const key in wily) {
  console.log(key)
}
const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
  console.log(i)
}

// cloning
const user = { name: 'wily', age: 30 }
const user2 = user
console.log(user)
console.log(user2)
const user3 = Object.assign({}, user)
console.log(user3)
const fruit1 = { color: 'red' }
const fruit2 = { color: 'blue', size: 'big' }
const mixed = Object.assign({}, fruit1, fruit2)
console.log(fruit1.color)
console.log(fruit1.size)
console.log(fruit2.color)
console.log(fruit2.size)
console.log(mixed.color)
console.log(mixed.size)

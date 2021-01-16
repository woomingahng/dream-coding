// let 키워드 read and write
let global = 'global'

// 블록 스코프
{
  let name = 'wily'
  console.log(name)
  name = 'hello'
  console.log(name)
  console.log(global)
}
console.log(global)

// var의 문제점
{
  console.log(age)
  var age = 4
  console.log(age)
}
console.log(age)

// const 키워드 read only
const test = 'test'
console.log(test)

// number
const count = 17
const size = 17.1
console.log(`value ${count}, type ${typeof count}`)
console.log(`value ${size}, type ${typeof size}`)
const inf = 1 / 0
const neginf = -1 / 0
const nan = 'stt' / 2
console.log(`value ${inf}, type ${typeof inf}`)
console.log(`value ${neginf}, type ${typeof neginf}`)
console.log(`value ${nan}, type ${typeof nan}`)

// string
const char = 'c'
const str = 'str'
const greet = 'hello' + str
console.log(`value ${char}, type ${typeof char}`)
console.log(`value ${str}, type ${typeof str}`)
console.log(`value ${greet}, type ${typeof greet}`)

// symbol
const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
console.log(symbol1 === symbol2)

// dynamic typing
let t1 = 'hello'
console.log(t1.charAt(0))
console.log(`value ${t1}, type ${typeof t1}`)
t1 = 5
console.log(`value ${t1}, type ${typeof t1}`)
t1 = '7' + 5
console.log(`value ${t1}, type ${typeof t1}`)
t1 = '7' / '5'
console.log(`value ${t1}, type ${typeof t1}`)

// object typing
const wily = { name: 'wily', age: 38 }
console.log(`value ${wily.name}, type ${typeof wily.name}`)
console.log(`value ${wily.age}, type ${typeof wily.age}`)
wily.name = 'test'
wily.age = 123
console.log(`value ${wily.name}, type ${typeof wily.name}`)
console.log(`value ${wily.age}, type ${typeof wily.age}`)

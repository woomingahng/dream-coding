// string concat
console.log('my' + 'cat')
console.log('1' + 2)
console.log(`string literals 1 + 2 = ${1 + 2}`)

// numeric
console.log(1 + 1)
console.log(1 - 1)
console.log(1 / 1)
console.log(1 * 1)
console.log(1 % 1)
console.log(1 ** 1)

// increment decrement
let counter = 3
const preInc = ++counter
console.log(`preInc: ${preInc}, counter: ${counter}`)
const postInc = counter++
console.log(`preInc: ${postInc}, counter: ${counter}`)

// object equallity
const wily1 = { name: 'wily' }
const wily2 = { name: 'wily' }
const wily3 = wily1
console.log(wily1 == wily2)
console.log(wily1 === wily2)
console.log(wily1 == wily3)

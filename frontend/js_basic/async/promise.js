'use strict'

// promise for asynchronous
// status: pending -> fulfilled or rejected
// producer vs consumer

// producer
const promise = new Promise((resolve, reject) => {
  // networking, filing
  console.log('doing something')
  setTimeout(() => {
    resolve('wily')
    // reject(new Error('no network'))
  }, 2000)
})
// consumer
promise
  .then((value) => {
    console.log(value)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log('finally')
  })

// promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
})
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1)
      }, 1000)
    })
  })
  .then((num) => console.log(num))

// error handling
const getHen = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve('HEN'), 1000))
const getEgg = (hen) =>
  new Promise((resolve, reject) =>
    // setTimeout(() => resolve(`${hen} => EGG`), 1000)
    setTimeout(() => reject(`error ${hen} => EGG`), 1000)
  )
const cook = (egg) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(`${egg} => MEAL`), 1000)
  )

getHen() //
  .then(getEgg)
  .catch((error) => 'BREAD')
  .then(cook)
  .then(console.log)
  .catch(console.log)

'use strict'

// synchrous
console.log('1')
setTimeout(() => {
  console.log('2')
}, 1000)
console.log('3')

// synchrous callback
function printImmediate(print) {
  print()
}
printImmediate(() => console.log('test'))

// asynchrous callback
function printDelay(print, timeout) {
  setTimeout(print, timeout)
}
printDelay(() => console.log('async'), 2000)

// callback hell
class UserStorage {
  loginUser(id, pw, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'wily' && pw === 'dream') ||
        (id === 'coer' && pw === 'academy')
      ) {
        onSuccess(id)
      } else {
        onError(new Error('not found'))
      }
    }, 2000)
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'wily') {
        onSuccess({ name: 'wily', role: 'admin' })
      } else {
        onError(new Error('no access'))
      }
    }, 2000)
  }
}

const user = new UserStorage()
const id = prompt('enter your id')
const pw = prompt('enter your pw')
user.loginUser(
  id,
  pw,
  (id) => {
    user.getRoles(
      id,
      (user) => console.log(user),
      (err) => console.log(err)
    )
  },
  (err) => console.log(err)
)

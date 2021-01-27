'use strict'

// promise heaven
class UserStorage {
  loginUser = (id, pw) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'wily' && pw === 'dream') ||
          (id === 'coer' && pw === 'academy')
        ) {
          resolve(id)
        } else {
          reject(new Error('not found'))
        }
      }, 2000)
    })

  getRoles = (user) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'wily') {
          resolve({ name: 'wily', role: 'admin' })
        } else {
          reject(new Error('no access'))
        }
      }, 2000)
    })
}

const user = new UserStorage()
const id = prompt('enter your id')
const pw = prompt('enter your pw')
user.loginUser(id, pw).then(user.getRoles).then(console.log).catch(console.log)

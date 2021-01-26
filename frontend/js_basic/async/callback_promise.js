'use strict'

// callback hell
class UserStorage {
  // loginUser(id, pw, onSuccess, onError) {
  //   setTimeout(() => {
  //     if (
  //       (id === 'wily' && pw === 'dream') ||
  //       (id === 'coer' && pw === 'academy')
  //     ) {
  //       onSuccess(id)
  //     } else {
  //       onError(new Error('not found'))
  //     }
  //   }, 2000)
  // }

  // getRoles(user, onSuccess, onError) {
  //   setTimeout(() => {
  //     if (user === 'wily') {
  //       onSuccess({ name: 'wily', role: 'admin' })
  //     } else {
  //       onError(new Error('no access'))
  //     }
  //   }, 2000)
  // }

  loginUser = (id, pw) =>
    new Promise((resolve, reject) => {
      console.log('promise1')
      setTimeout(() => {
        if (
          (id === 'wily' && pw === 'dream') ||
          (id === 'coer' && pw === 'academy')
        ) {
          console.log('resolved1')
          resolve(id)
        } else {
          console.log('rejected1')
          reject(new Error('not found'))
        }
      }, 2000)
    })

  getRoles = (user) =>
    new Promise((resolve, reject) => {
      console.log('promise2')
      setTimeout(() => {
        if (user === 'wily') {
          console.log('resolved2')
          resolve({ name: 'wily', role: 'admin' })
        } else {
          console.log('reject2')
          reject(new Error('no access'))
        }
      }, 2000)
    })
}

const user = new UserStorage()
const id = prompt('enter your id')
const pw = prompt('enter your pw')
// user.loginUser(
//   id,
//   pw,
//   (id) => {
//     user.getRoles(
//       id,
//       (user) => console.log(user),
//       (err) => console.log(err)
//     )
//   },
//   (err) => console.log(err)
// )
user.loginUser(id, pw).then(user.getRoles(id)).then(console.log)

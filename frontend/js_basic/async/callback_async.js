'use strict'

// promise heaven
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

class UserStorage {
  async loginUser(id, pw) {
    await delay(1000)
    if (
      (id === 'wily' && pw === 'dream') ||
      (id === 'coer' && pw === 'academy')
    ) {
      return id
    } else {
      throw new Error('not found')
    }
  }

  async getRoles(user) {
    await delay(1000)
    if (user === 'wily') {
      return { name: 'wily', role: 'admin' }
    } else {
      throw new Error('no access')
    }
  }
}

const user = new UserStorage()
const id = prompt('enter your id')
const pw = prompt('enter your pw')
user.loginUser(id, pw).then(user.getRoles).then(console.log).catch(console.log)

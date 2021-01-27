// async
async function fetchUser() {
  // networking
  return 'wily'
}

const user = fetchUser()
user.then(console.log)
console.log(user)

// await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function getApple() {
  await delay(1000)
  return 'APPLE'
}

async function getBanana() {
  await delay(1000)
  return 'BANANA'
}

async function pickFruits() {
  const apple = await getApple()
  const banana = await getBanana()
  return `${apple} -> ${banana}`
}

pickFruits().then(console.log)

// promise apis
function pickAllFruits() {
  return Promise.all([getBanana(), getApple()]).then((fruits) =>
    fruits.join(' + ')
  )
}
pickAllFruits().then(console.log)

function pickOnlyOne() {
  return Promise.race([getBanana(), getApple()])
}
pickOnlyOne().then(console.log)

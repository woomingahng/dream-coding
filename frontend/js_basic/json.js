// obj -> json
let json = JSON.stringify(true)
console.log(json)
json = JSON.stringify(['apple', 'banana'])
console.log(json)
const rabbit = {
  name: 'tory',
  color: 'white',
  size: null,
  birthday: new Date(),
  jump: () => {
    console.log(`${name} can jump`)
  },
}
json = JSON.stringify(rabbit)
console.log(json)
json = JSON.stringify(rabbit, ['name', 'color', 'size'])
console.log(json)
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`)
  return key === 'name' ? 'wily' : value
})
console.log(json)

// json -> obj
json = JSON.stringify(rabbit)
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`)
  return key === 'birthday' ? new Date(value) : value
})
console.log(obj)
console.log(obj.birthday.getDate())

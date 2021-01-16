// array -> string
{
  const fruits = ['apple', 'banana', 'orange']
  console.log(fruits)
  console.log(fruits.toString())
  console.log(fruits.join(' '))
}

// string -> array
{
  const fruits = 'apple,banana,orange'
  console.log(fruits.split(','))
}

// reverse
{
  const array = [1, 2, 3, 4, 5]
  console.log(array.reverse())
}

// new array without first and second
{
  const array = [1, 2, 3, 4, 5]
  const newArray = array.slice(2)
  console.log(newArray)
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name
    this.age = age
    this.enrolled = enrolled
    this.score = score
  }
}
const student = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
]

// find student whos score is 90
{
  console.log(student.find((student) => student.score === 90))
}

// make an array of enrolled students
{
  console.log(student.filter((student) => student.enrolled))
}

// make an array of scores
{
  console.log(student.map((student) => student.score))
}

// check score lower than 50
{
  console.log(student.some((student) => student.score < 50))
  console.log(!student.every((student) => student.score >= 50))
}

// get average score
{
  console.log(
    student.reduce((prev, curr) => prev + curr.score, 0) / student.length
  )
}

// make string of scores
{
  console.log(student.map((student) => student.score).join(','))
}

// sorted string of scores
{
  console.log(
    student
      .map((student) => student.score)
      .sort((a, b) => a - b)
      .join(',')
  )
}

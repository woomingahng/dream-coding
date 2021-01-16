const calculate = (command, a, b) => {
  if (
    command !== 'add' &&
    command !== 'substract' &&
    command !== 'divide' &&
    command !== 'multiple' &&
    command !== 'remainder'
  ) {
    return
  }
  switch (command) {
    case 'add':
      return a + b
    case 'substract':
      return a - b
    case 'divide':
      return a / b
    case 'multiple':
      return a * b
    case 'remainder':
      return a % b
  }
}

console.log(calculate('add', 1, 2))
console.log(calculate('substract', 1, 2))
console.log(calculate('divide', 1, 2))
console.log(calculate('multiple', 1, 2))
console.log(calculate('remainder', 1, 2))

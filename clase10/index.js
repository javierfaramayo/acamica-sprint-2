function add(num1, num2) {
  const result = num1 + num2
  console.log('ADD FUNCTION ', result)
  return result
}

function substract(num1, num2) {
  const result = num1 - num2
  console.log('SUBSTRACT FUNCTION ', result)
  return result
}

function multiply(num1, num2) {
  const result = num1 * num2
  console.log('MULTIPLY FUNCTION ', result)
  return result
}

function divide(num1, num2) {
  const result = num1 / num2
  console.log('DIVIDE FUNCTION ', result)
  return result
}

function executeOperation(num1, num2, operationFunction) {
  console.log(num1, num2, operationFunction)
  if (typeof operationFunction === 'number') {
    return console.log('THE THIRD PARAM IS NOT A FUNCTION, IS A NUMBER')
  }

  if (typeof operationFunction !== 'function') {
    return console.log('THE THIRD PARAM IS NOT A FUNCTION')
  }

  console.log('EXECUTING OPERATION...')
  operationFunction(num1, num2)
  console.log('OPERATION FINISHED')
}

// executeOperation(10, 20, add)

// executeOperation(10, 20, substract)

executeOperation(multiply(2, 5), divide(40, 2), (a, b) => {
  console.log('AVERAGE FUNCTION ', (a + b) / 2)
})

// executeOperation(10, 20, (num1, num2) => {
//   console.log('ADD FUNCTION ', num1 + num2)
//   return num1 + num2
// })

// executeOperation(10, 20, function (num1, num2) {
//   console.log('SUBSTRACT FUNCTION ', num1 - num2)
// })

// let number = 0

// number = 10
// setTimeout(() => {
//   number = 30
//   console.log(number)
// }, 0)

// console.log(number)

// for (let index = 0; index < 10; index++) {
//   setTimeout(() => {
//     const number = randomNumber()
//     console.log(number)
//   }, index)
// }

// const randomNumber = () => {
//   setTimeout(() => {
//     return 1
//   }, 1)
// }

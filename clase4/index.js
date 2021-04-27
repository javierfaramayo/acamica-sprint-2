// const carBrands = new Array('Chevrolet', 'Ford', 'BMW', 'Audi', 'Fiat')
// const carBrands = ['Chevrolet', 'Ford', 'BMW', 'Audi', 'Fiat']

// console.log(carBrands)
// carBrands.push('Ferrari')
// console.log(carBrands)
// carBrands.unshift('Volkswagen')
// console.log(carBrands)
// console.log(carBrands[carBrands.length - 1])

// console.log(carBrands.toString())
// console.log(carBrands[0])
// console.log(carBrands.shift())
// console.log(carBrands[0])
// console.log('-------------------------')
// carBrands[2] = 'Ferrari'
// console.log(carBrands)

// const query = '    Fo               rd   '
// const cleanQuery = query.trim().split(' ').join('')
// const index = carBrands.indexOf(cleanQuery)

// if (index >= 0) {
//   console.log(`El valor ${query} se encuentra en el índice ${index}`)
// } else {
//   console.log(`El valor ${query} NO se encuentra en el array`)
// }

// console.log(carBrands.sort())

// console.log(carBrands)
// delete carBrands[0]
// delete carBrands[1]
// console.log(carBrands[0])
// console.log(carBrands[1])
// console.log(typeof carBrands[0])
// console.log(typeof carBrands[1])

// console.log(carBrands)
// console.log(carBrands.splice(0, 2, 'Ferrari', 'Volvo'))
// console.log(carBrands)

// const moreCarBrands = ['Ferrari', 'Volvo']
// const mergedBrands = [...moreCarBrands, ...carBrands] // SPREAD operator
// console.log(...mergedBrands)

// const filteredCarBrands = carBrands.filter(
//   (carBrand) => carBrand === 'Ford     '
// )

// console.log(carBrands)
// console.log(filteredCarBrands)

// const products = [
//   { id: 0, name: 'Samsung galaxy s20 plus', price: 900, offerPrice: null },
//   { id: 1, name: 'Motorola moto G 8', price: 650, offerPrice: 560 },
//   { id: 2, name: 'Xiaomi Mi 10', price: 750, offerPrice: 500 },
// ]

// Reglas: Si el precio de oferta es null quiero la variable offer en false, si el precio es mayor a 700 el producto tiene envío gratis

// const mappedProducts = products.map((product) => {
//   //   const newProduct = { ...product }

//   //   if (product.offerPrice) {
//   //     newProduct.offer = true
//   //   } else {
//   //     newProduct.offer = false
//   //   }

//   //   product.offerPrice ? (newProduct.offer = true) : (newProduct.offer = false)

//   //   newProduct.offer = product.offerPrice ? true : false

//   //   newProduct.offer = !!product.offerPrice
//   //   newProduct.freeShipping = product.price > 700 ? true : false

//   return {
//     ...product,
//     offer: !!product.offerPrice,
//     freeShipping: product.price > 700 ? true : false,
//   }
// })

// const mappedProducts = products.map((product) => ({
//   ...product,
//   offer: !!product.offerPrice,
//   freeShipping: product.price > 700 ? true : false,
// }))

// const freeShippingProducts = mappedProducts.filter(
//   (product) => product.freeShipping
// )

// console.log(mappedProducts)
// console.log(freeShippingProducts)

// const mappedAndFilteredProducts = products
//   .map((product) => ({
//     ...product,
//     offer: !!product.offerPrice,
//     freeShipping: product.price > 700 ? true : false,
//   }))
//   .filter((product) => product.freeShipping)

// console.log(mappedAndFilteredProducts)

// const global = 'SCOPE_GLOBAL'
// // HOISTING: Comportamiento de javascript

// const myFunction = () => {
//   const functionScope = 'SCOPE_FUNCTION'
//   console.log(functionScope)
// }

// if (global === 'SCOPE_GLOBAL') {
//   const blockScope = 'BLOCK_SCOPE'
//   console.log(blockScope)
// }

// console.log(global)
// myFunction()
// console.log(functionScope) // ERROR PORQUE NO TENEMOS ACCESO
// console.log(blockScope) // ERROR PORQUE NO TENEMOS ACCESO

// const values = [
//   'Text',
//   98.5,
//   true,
//   75,
//   { id: 0, name: 'Object' },
//   960,
//   'Another text',
//   false,
//   76,
//   134,
// ]

// const numberValues = values.filter((value) => !isNaN(parseaccumulator + currentValueInt(value)))
// const notNumberValues = values.filter((value) => isNaN(parseInt(value)))
// const sumNumberValues = numberValues.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// )
// console.log(numberValues)
// console.log(notNumberValues)
// console.log(sumNumberValues)

// const sumNumberValues = values
//   .filter((value) => !isNaN(parseInt(value)))
//   .reduce((accumulator, currentValue) => accumulator + currentValue)

// const notNumberValues = values.filter((value) => isNaN(parseInt(value)))

// console.log(notNumberValues)
// console.log(sumNumberValues)

// Resolución Ejercicio 4

const isNotZero = (value) => parseInt(value) !== 0

const deleteElements = (arrayValues) => {
  const values = [...arrayValues]

  const module = values.length % 3

  if (module > 0) values.shift()
  if (module > 1) values.pop()

  return values
}
// function isNotZero(value) {
//   if(parseInt(value) !== 0) {
//     return true
//   } else {
//     return false
//   }
// }

let value
const values = []

while (isNotZero(value)) {
  value = prompt('Ingrese un valor')
  if (isNotZero(value)) values.push(value)
}

const cleanedValues = deleteElements(values)
const elementsNumber = cleanedValues.length / 3

const arrayOne = cleanedValues.slice(0, elementsNumber)
const arrayTwo = cleanedValues.slice(elementsNumber, elementsNumber * 2)
const arrayThree = cleanedValues.slice(elementsNumber * 2, elementsNumber * 3)

console.log(values)
console.log(cleanedValues)
console.log(arrayOne)
console.log(arrayTwo)
console.log(arrayThree)

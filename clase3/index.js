// TRUTHY
// let value = 10
// if (value) {
//   console.log('El valor es TRUE')
// } else {
//   console.log('El valor es FALSE')
// }

// FALSY
// Cadena de texto vacía, null, undefined o number 0
// let objectValue = {}
// let arrayValue = []
// let stringValue = ''
// let undefinedValue = undefined
// let nullValue = null
// let numberValue = 0

// console.log(arrayValue.length)
// console.log('OBJECT KEYS', Object.keys(objectValue))

// if (Object.keys(objectValue).length) {
//   console.log('El valor es TRUE')
// } else {
//   console.log('El valor es FALSE')
// }
// let n = 0

// while (n <= 5) {
//   console.log('WHILE', n)
//   // n = n + 1
//   // n += 1
//   n++
// }

// do {
//   console.log('DO WHILE', n)
// } while (n > 10)

// for (let i = 1; i <= 10; i++) {
//   console.log('FOR', i)
// }

// const colors = ['Blue', 'Green', 'Black', 'White']

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i])
// }

// colors.forEach((color) => {
//   console.log(color)
// })

// for (const color of colors) {
//   console.log(color)
// }

// ACTIVE, INACTIVE, NO_STOCK
// const product = {
//   name: 'Samsung Galaxy S20 Plus',
//   price: 900,
//   freeShipping: false,
//   status: 'ACTIVE',
// }

// if (product.status === 'ACTIVE') {
//   console.log('El producto se encuentra ACTIVO')
// } else if (product.status === 'INACTIVE') {
//   console.log('El producto se encuentra INACTIVO')
// } else if (product.status === 'NO_STOCK') {
//   console.log('El producto se encuentra SIN STOCK')
// } else {
//   console.log('El estado del producto no es correcto')
// }

// switch (product.status) {
//   case 'ACTIVE':
//     console.log('El producto se encuentra ACTIVO')
//     break

//   case 'INACTIVE':
//     console.log('El producto se encuentra INACTIVO')
//     break

//   case 'NO_STOCK':
//     console.log('El producto se encuentra SIN STOCK')
//     break

//   default:
//     console.log('El estado del producto no es correcto')
//     break
// }

// // FUNCIÓN SIMPLE
// function hello() {
//   console.log('Hello User!')
// }

// // FUNCIÓN CON PARÁMETRO
// function helloUser(name) {
//   console.log('Hello', name, '!')
// }

// // FUNCIÓN CON PARÁMETRO OPCIONAL
// function helloOptionalUser(name = 'Optional User') {
//   console.log('Hello', name, '!')
// }

// hello()
// helloUser('Javier')
// helloOptionalUser('Fernando')

// ACTIVE, INACTIVE, NO_STOCK

const products = [
  {
    name: 'Samsung Galaxy S20 Plus',
    price: 900,
    offerPrice: 560,
    freeShipping: false,
    offer: true,
    status: 'ACTIVE',
  },
  {
    name: 'Motola Z10',
    price: 450,
    offerPrice: null,
    freeShipping: true,
    offer: true,
    status: 'ACTIVE',
  },
  {
    name: 'Lg G8 Plus',
    price: 630,
    offerPrice: null,
    freeShipping: false,
    offer: false,
    status: 'NO_STOCK',
  },
]

// FUNCIÓN CLÁSICA
function calculateOfferPercent(originalPrice, offerPrice) {
  const percentPrice = (offerPrice * 100) / originalPrice
  const percentDiscount = 100 - percentPrice
  return percentDiscount.toFixed(2)
}

// // ARROW FUNCTION CON LLAVES Y RETURN
// const calculateOfferPercent = (originalPrice, offerPrice) => {
//   const percentPrice = (offerPrice * 100) / originalPrice
//   const percentDiscount = 100 - percentPrice
//   return percentDiscount.toFixed(2)
// }

// // ARROW FUNCTION SIN LLAVES NI RETURN
// const calculateOfferPercent = (originalPrice, offerPrice) =>
//   (100 - (offerPrice * 100) / originalPrice).toFixed(2)

for (const product of products) {
  if (product.offer && product.offerPrice) {
    const percentDiscount = calculateOfferPercent(
      product.price,
      product.offerPrice
    )
    console.log(
      `El porcentaje de descuento aplicado al producto ${product.name} es del ${percentDiscount}%`
    )
  } else {
    console.log(
      `El producto ${product.name} NO tiene ningún descuento aplicado`
    )
  }
}

const position = Number(prompt('Indique la posición que desea ver'))
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

console.log('La letra es', letters[position - 1])

const num1 = prompt('Ingrese un número')
const num2 = prompt('Ingrese otro número')

const replacedNum1 = num1.replace(',', '.')
const replacedNum2 = num2.replace(',', '.')

const parsedNum1 = Number(replacedNum1)
const parsedNum2 = Number(replacedNum2)

if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
  console.log('Los números deben ser valores numéricos')
} else {
  console.log('RESULTADO', parsedNum1 + parsedNum2)
}

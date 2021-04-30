const arrow = () => {
  console.log(this)
}

function traditional() {
  console.log(this)
}

arrow()
traditional()

class Person {
  name
  lastName
  age

  constructor(personName, personLastName, personAge) {
    this.name = personName
    this.lastName = personLastName
    this.age = personAge
    console.log(this)
  }

  getFullname() {
    return `${this.name} ${this.lastName}`
  }

  isOlder() {
    return this.age > 18
  }
}

const peter = new Person('Peter', 'Parker', 20)
const javier = new Person('Javier', 'Aramayo', 32)

function scopeFunction() {
  console.log('SCOPE FUNCTION', this)

  function inScopeFunction() {
    console.log('IN SCOPE FUNCTION', this)
  }

  const outScopeFunction = () => {
    console.log('OUT SCOPE FUNCTION', this)
  }

  inScopeFunction()
  outScopeFunction()
}

scopeFunction()

// function traditionalFunction(value) {
//   return value.trim()
// }

// const arrowFunction = value => value.trim()
// const arrowFunction = value => {
//     value.trim()
//     value.trim()
//     value.trim()
//     value.trim()
//     value.trim()
//     value.trim()

//     return value
// }

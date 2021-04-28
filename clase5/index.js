class Plane {
  brand
  model

  constructor(marca, modelo) {
    this.brand = marca ? marca : 'Marca desconocida'
    this.model = modelo ? modelo : 'Modelo desconocido'
    this.start()
  }

  start() {
    console.log(`Starting plane ${this.brand} ${this.model}`)
  }

  getBrand() {
    return this.brand
  }

  setBrand(newBrand) {
    this.brand = newBrand
  }
}

const boeing737 = new Plane('Boeing', '737')
const boeing900 = new Plane('Boeing', '900')
const desconocido = new Plane()

console.log(boeing737.getBrand())
boeing737.setBrand('Nueva marca')
console.log(boeing737.getBrand())

// boeing737.start()
// boeing900.start()

class Person {
  name
  lastName
  age

  constructor(personName, personLastName, personAge) {
    this.name = personName
    this.lastName = personLastName
    this.age = personAge
  }

  getFullname() {
    return `${this.name} ${this.lastName}`
  }

  isOlder() {
    return this.age > 18
  }
}

const peter = new Person('Peter', 'Parker', 20)
const richard = new Person('Richard', 'Pilsen', 40)
const manuel = new Person('Manuel', 'Zapata', 15)

const users = [peter, richard, manuel]

for (const user of users) {
  console.log(user, typeof user)
  const ageMessage = user.isOlder() ? 'Es mayor de edad' : 'Es menor de edad'
  console.log(`El usuario ${user.getFullname()} ${ageMessage}`)
}

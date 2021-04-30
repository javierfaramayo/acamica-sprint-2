// class Plane {
//   brand
//   model

//   constructor(marca, modelo) {
//     this.brand = marca ? marca : 'Marca desconocida'
//     this.model = modelo ? modelo : 'Modelo desconocido'
//     this.start()
//   }

//   start() {
//     console.log(`Starting plane ${this.brand} ${this.model}`)
//   }

//   getBrand() {
//     return this.brand
//   }

//   setBrand(newBrand) {
//     this.brand = newBrand
//   }
// }

// const boeing737 = new Plane('Boeing', '737')
// const boeing900 = new Plane('Boeing', '900')
// const desconocido = new Plane()

// console.log(boeing737.getBrand())
// boeing737.setBrand('Nueva marca')
// console.log(boeing737.getBrand())

// // boeing737.start()
// // boeing900.start()

// class Person {
//   name
//   lastName
//   age

//   constructor(personName, personLastName, personAge) {
//     this.name = personName
//     this.lastName = personLastName
//     this.age = personAge
//   }

//   getFullname() {
//     return `${this.name} ${this.lastName}`
//   }

//   isOlder() {
//     return this.age > 18
//   }
// }

// const peter = new Person('Peter', 'Parker', 20)
// const richard = new Person('Richard', 'Pilsen', 40)
// const manuel = new Person('Manuel', 'Zapata', 15)

// const users = [peter, richard, manuel]

// for (const user of users) {
//   console.log(user, typeof user)
//   const ageMessage = user.isOlder() ? 'Es mayor de edad' : 'Es menor de edad'
//   console.log(`El usuario ${user.getFullname()} ${ageMessage}`)
// }

// Resolución ejercicio perrera municipal
const ADOPTION_STATUS = {
  IN_ADOPTION: 'En adopción',
  IN_PROCESS: 'En proceso de adopción',
  ADOPTED: 'Adoptado',
}
class Dog {
  status
  name
  lastName
  race
  color

  constructor(status, name, lastName, race, color) {
    this.status = status
    this.name = name
    this.lastName = lastName
    this.race = race
    this.color = color
  }

  getstatus() {
    return this.status
  }

  setstatus(status) {
    this.status = status
  }

  getname() {
    return this.name
  }

  setname(name) {
    this.name = name
  }

  getlastName() {
    return this.lastName
  }

  setlastName(lastName) {
    this.lastName = lastName
  }

  getrace() {
    return this.race
  }

  setrace(race) {
    this.race = race
  }

  getcolor() {
    return this.color
  }

  setcolor(color) {
    this.color = color
  }
}

let wantAddNewDog = true
const dogs = []

const isNotEmpty = (value) => value && !!value.trim()

const addNewDog = () => {
  const status = prompt('Ingrese el Estado del perro')
  const name = prompt('Ingrese el Nombre')
  const lastName = prompt('Ingrese el Apellido')
  const race = prompt('Ingrese la raza')
  const color = prompt('Ingrese el color')

  if (
    isNotEmpty(status) &&
    isNotEmpty(name) &&
    isNotEmpty(lastName) &&
    isNotEmpty(race) &&
    isNotEmpty(color)
  ) {
    const dog = new Dog(status, name, lastName, race, color)
    dogs.push(dog)
  }

  wantAddNewDog = window.confirm('¿Quiere cargar un nuevo perro?')
}

while (wantAddNewDog) {
  addNewDog()
}

console.log('TODOS LOS PERROS', dogs)
console.log(
  'EN ADOPCIÓN',
  dogs.filter((dog) => dog.getstatus() === ADOPTION_STATUS.IN_ADOPTION)
)
console.log(
  'EN PROCESO',
  dogs.filter((dog) => dog.getstatus() === ADOPTION_STATUS.IN_PROCESS)
)
console.log(
  'ADOPTADOS',
  dogs.filter((dog) => dog.getstatus() === ADOPTION_STATUS.ADOPTED)
)

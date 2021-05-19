fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((users) => {
    let template = ''
    for (const user of users) {
      template += `
        <div class="user">
            <p class="name">${user.name}</p>
            <p class="email">${user.email}</p>
            <p class="address">${user.address.street}</p>
            <p class="phone">${user.phone}</p>
        </div>
      `
    }
    document.querySelector('.users').innerHTML = template
  })
  .catch((err) => console.error('PROMISE CATCH', err))

let encuentro = new Promise((resolve, reject) => {
  console.log('Veamos la demo en vivo')

  const suma = 2 + 2

  if (suma === 4) {
    resolve('Suma es igual a 4')
  } else {
    reject('Suma NO ES 4')
  }
})

encuentro.then(
  (result) => console.log('THEN ' + result) // Muestra "Vamos por más"
)

encuentro.catch(
  (error) => console.log('CATCH ' + error) // Muestra "Vuelve a consultar ..."
)

// GET 'http://miapi.com/users/1' devuelve datos del usuario
// POST 'http://miapi.com/users/1' genera un usuario nuevo
// DELETE 'http://miapi.com/users/1' elimina un usuario
// PUT 'http://miapi.com/users/1' reescribe completamente el usuario
// PATCH 'http://miapi.com/users/1' modifica UN CAMPO de ese usuario

// GET http://miapinorestful.com/users/obtener devuelve datos de todos los usuarios
// GET http://miapinorestful.com/users/getById/1 devuelve datos de un usuario
// POST http://miapinorestful.com/users/create genera un usuario
// POST http://miapinorestful.com/users/create genera un usuario

// POST http://miapicongraphql.com/main
// { users: { name, lastName, address } }

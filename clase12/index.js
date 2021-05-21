const API_GITHUB_URL = 'https://api.github.com'

const getUsers = async () => {
  try {
    const res = await fetch(`${API_GITHUB_URL}/users?since=30&per_page=10`)
    const users = await res.json()
    console.log(users)
  } catch (error) {
    console.error(error)
  }
}

getUsers()

fetch(`${API_GITHUB_URL}/users?since=30&per_page=10`)
  .then((res) => res.json())
  .then((users) => {
    console.log(users.length)
    console.log(users)
    console.log(Object.keys(users[0]).length)
  })
  .catch((err) => console.error(err))

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 2000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 3000)
})
Promise.all([p1, p2, p3]).then(
  (resp) => {
    console.log('ALL', resp) // Logs [1,2,3]
    // document.querySelector('#spinner').hidden = true
  },
  (err) => {
    console.log(err) // Not executed
  }
)

// Promise.race([p1, p2, p3]).then(
//   (resp) => {
//     console.log('RACE', resp) // Logs [1,2,3]
//     // document.querySelector('#spinner').hidden = true
//   },
//   (err) => {
//     console.log(err) // Not executed
//   }
// )

// const forceCatch = () => {
//   throw new Error('Error en ejecucion')
// }

// try {
//   forceCatch()
//   console.log('OK')
// } catch (error) {
//   console.log(error)
// }

if (
  1 === 2 - 1 &&
  1 === 1 &&
  1 !== 0 &&
  23 === 23 &&
  1 === 2 - 1 &&
  1 === 1 &&
  1 !== 0 &&
  23 === 23
) {
  console.log()
}

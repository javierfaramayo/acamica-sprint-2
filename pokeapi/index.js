const URL_POKE_API = 'https://pokeapi.co/api/v2'

// const returnPokemonPromise = (id) => {
//   return fetch(`${URL_POKE_API}/pokemon/${id}`).then((res) => res.json())
// }

// const pokemon1 = returnPokemonPromise(10)
// const pokemon2 = returnPokemonPromise(25)
// const pokemon3 = returnPokemonPromise(38)

// Promise.all([pokemon1, pokemon2, pokemon3]).then((res) => {
//   console.log(res)
// })

const renderPokemons = (pokemons) => {
  let template = ''
  for (const pokemon of pokemons) {
    template += `
        <button value="${pokemon.url}" class="pokemon__button">${pokemon.name}</button>
        `
  }
  document.querySelector('.pokemons').innerHTML = template
  document.querySelectorAll('.pokemon__button').forEach((button) => {
    button.addEventListener('click', (event) => {
      const url = event.target.value
      getById(url)
    })
  })
}

const renderPokemon = (pokemon) => {
  const template = `
    <p>${pokemon.name}</p>
    <img
      src="${pokemon.sprites.front_default}"
      alt="${pokemon.name}"
    />
    `
  document.querySelector('.pokemon__selected').classList.toggle('hidden')
  document.querySelector('.pokemon__selected').innerHTML = template
}

const getById = (url) => {
  document.querySelector('.pokemon__selected').innerHTML =
    '<p><b>Buscando pokemon...</b></p>'
  fetch(url)
    .then((res) => res.json())
    .then((pokemon) => {
      renderPokemon(pokemon)
    })
}

const getAll = () => {
  fetch(`${URL_POKE_API}/pokemon`)
    .then((res) => res.json())
    .then((apiResponse) => {
      renderPokemons(apiResponse.results)
    })
    .catch((err) => console.error(err))
}

getAll()

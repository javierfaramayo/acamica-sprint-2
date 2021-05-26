const API_KEY = '839aacac'
const API_URL = 'http://www.omdbapi.com'
const API_POSTERS_URL = 'http://img.omdbapi.com'

document.addEventListener('DOMContentLoaded', async function () {
  try {
    // CON AXIOS
    // const apiResponse = await axios.get(`${API_URL}/?apikey=${API_KEY}&t=lord`)
    // const movie = apiResponse.data

    // CON FETCH
    const apiResponse = await fetch(`${API_URL}/?apikey=${API_KEY}&t=lord`)
    const movie = await apiResponse.json()
    let template = `
    <div class="row">
        <div class="col s12 m7">
        <div class="card">
            <div class="card-image">
            <img src="${movie.Poster}" />
            <span class="card-title">${movie.Title}</span>
            </div>
            <div class="card-content">
            <p>${movie.Plot}</p>
            </div>
        </div>
        </div>
    </div>
    `
    document.querySelector('.movie-info').innerHTML = template
    console.log(movie)
  } catch (error) {
    console.error(error)
  }
})

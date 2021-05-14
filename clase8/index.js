// const button = document.querySelector('.button')
// const html = document.querySelector('html')
// button.addEventListener('click', (event) => {
//   console.log('BUTTON EVENT', event.target)
//   event.stopPropagation()
// })
// html.addEventListener('click', (event) => {
//   console.log('HTML EVENT', event.target)
// })
const form = document.querySelector('#form')
const button = document.querySelector('input[type=submit]')

const submitFormHandler = (event) => {
  event.preventDefault()

  const name = document.querySelector('input[name=user_name]').value
  const age = document.querySelector('input[name=user_age]').value

  if (name.trim() && age.trim()) {
    form.submit()
  } else {
    swal.fire({
      title: 'Error!',
      text: 'Debes completar todos los campos!',
      icon: 'error',
    })
  }
}

// button.addEventListener('click', submitFormHandler)
form.addEventListener('submit', submitFormHandler)

// --------------------------------------------

const logo = document.querySelector('.logo')

const logoMouseHoverHandler = () => {
  logo.classList.toggle('logo_hover')
}

logo.addEventListener('mouseenter', logoMouseHoverHandler)
logo.addEventListener('mouseleave', logoMouseHoverHandler)

//----------------------------------------------------------

const title = document.querySelector('#title')

const onTitleClick = () => {
  const text = prompt('Enter the title for the page')

  if (text && text.trim()) {
    title.innerText = text.trim()
    localStorage.setItem('TITLE', text.trim())
  }
}

title.addEventListener('click', onTitleClick)

document.addEventListener('DOMContentLoaded', () => {
  const text = localStorage.getItem('TITLE')
  title.innerText = text || 'Clase 8'
})

// -----------------------------------------------------------

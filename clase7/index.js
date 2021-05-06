window.onload = () => {
  //   const h1elements = document.getElementsByTagName('h1')
  //   for (const h1 of h1elements) {
  //     console.log(h1)
  //   }
  //   const h2 = document.getElementById('subtitle')
  //   console.log(h2.innerText)
  //   h2.innerText = 'Changed subtitle'
  //   console.log(h2.className)
  //   console.log(h2.classList)
  //   const p = document.getElementsByClassName('description')
  //   console.log(p)
  //   const h2query = document.querySelector('#subtitle')
  //   console.log(h2query)
  //   const pquery = document.querySelectorAll('.description')
  //   console.log(pquery)
  //   for (const p of pquery) {
  //     //   p.classList.remove('description')
  //     p.className = 'primary_description'
  //     p.innerHTML = `
  //       <div class="inner_elements">
  //       <p>This is new p title</p>
  //       <b>This is strong text</b>
  //       </div>
  //       `
  //   }
  //   const innerElements = document.querySelector('.inner_elements')
  //   console.log(innerElements)
  //   console.log(innerElements.lastElementChild)
  //   const newDiv = document.createElement('div')
  //   newDiv.className = 'new_div'
  //   const newP = document.createElement('p')
  //   newP.innerText = 'Im a new text'
  //   newDiv.appendChild(newP)
  //   console.log(newDiv)
  //   const body = document.querySelector('body')
  //   body.appendChild(newDiv)
  //   //   body.innerHTML = `
  //   //   ${body.innerHTML}
  //   //   <hr>
  //   //   <hr>
  //   //   <div class="new_div">
  //   //     <p>Im a new text</p>
  //   //   </div>
  //   //   `
  //   console.log(h2)
  //   h2.insertAdjacentHTML(
  //     'afterbegin',
  //     `
  // <hr>
  // <hr>
  // <div class="new_div">
  //   <p>Im a new text</p>
  // </div>
  // <hr>
  // <hr>
  // `
  //   )
  // const activeTheme = getActiveTheme()
  // document.querySelector('body').className = activeTheme
  // let num = parseInt(localStorage.getItem('NUM')) || 0
  // console.log(num)
  // for (let index = 0; index < 5; index++) {
  //   num++
  // }
  // console.log(num)
  // localStorage.setItem('NUM', num)
  promptExercise()
}

const getActiveTheme = () => localStorage.getItem('THEME') || 'light'

const changeTheme = () => {
  const activeTheme = getActiveTheme()

  let newTheme = activeTheme === 'light' ? 'dark' : 'light'
  document.querySelector('body').className = newTheme

  localStorage.setItem('THEME', newTheme)
}

const createComponent = (parentClass, text, bgColor, fontColor, fontSize) => {
  return `
  <div
    class="${parentClass}"
    style="background-color: ${bgColor}; color: ${fontColor}; font-size: ${fontSize}"
  >
    <p>${text}</p>
  </div>
  `
}

const promptExercise = () => {
  const name = prompt('Enter your name')
  const bgColor = prompt('Enter a background color')
  const fontColor = prompt('Enter a font color')
  const fontSize = prompt('Enter a font size')
  const componentClass = prompt('Enter a component class')

  const template = createComponent(
    componentClass,
    name,
    bgColor,
    fontColor,
    fontSize
  )

  // const div = document.createElement('div')
  // div.className = 'square'
  // div.style.backgroundColor = bgColor
  // div.style.color = fontColor
  // div.style.fontSize = fontSize

  // const p = document.createElement('p')
  // p.innerText = name

  // div.appendChild(p)

  document.querySelector('body').insertAdjacentHTML('beforeend', template)
  // document.querySelector('body').appendChild(div)
}

// window.onresize = () => {
//   console.log(window.visualViewport)
// }

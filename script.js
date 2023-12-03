const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const firstName = document.getElementById('first_name')
const lastName = document.getElementById('last_name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const formControl = document.querySelectorAll('.form-control')
const smallTags = document.querySelectorAll('small')

function onSubmit(e) {
  e.preventDefault()

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')

  svg.setAttribute('width', '24')
  svg.setAttribute('height', '24')

  svg.innerHTML = `
  <g fill="none" fill-rule="evenodd">
  <circle fill="#FF7979" cx="12" cy="12" r="12" />
  <rect
    fill="#FFF"
    x="11"
    y="6"
    width="2"
    height="9"
    rx="1"
  />
  <rect
    fill="#FFF"
    x="11"
    y="17"
    width="2"
    height="2"
    rx="1"
  />
</g>
  `

  svg.appendChild(svgPath)

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      console.log('empty')
      inputs[i].insertBefore(svg, inputs[i].nextSibling)
    }
  }

  // inputs.forEach(input => {
  //   console.log(input.value)
  //   if (input.value === '') {
  //     input.insertAdjacentElement('afterend', svg)
  //   }
  // })
}

form.addEventListener('submit', onSubmit)

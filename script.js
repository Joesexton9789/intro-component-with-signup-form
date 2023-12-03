const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const firstName = document.getElementById('first_name')
const lastName = document.getElementById('last_name')
const email = document.getElementById('email')
const password = document.getElementById('password')

function showError(value, message) {
  const label = value.parentElement
  const small = label.querySelector('small')
  if (value.value === '') {
    small.innerText = message
  } else {
    small.innerText = ''
  }
}

function hasError(input) {
  input.forEach(values => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const svgPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    )

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

    if (values.value === '') {
      values.insertAdjacentElement('afterend', svg)
      values.style.borderColor = 'red'
    }
  })
}

function checkEmail(value) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!re.test(value.value.trim())) {
    showError(email, 'Looks like this is not an email')
  } else {
    showError(email, '')
  }
}

function onSubmit(e) {
  e.preventDefault()

  hasError([firstName, lastName, password, email])
  showError(firstName, 'First name cannot be empty')
  showError(lastName, 'Last name cannot be empty')
  showError(password, 'Password cannot be empty')
  checkEmail(email)
}

form.addEventListener('submit', onSubmit)

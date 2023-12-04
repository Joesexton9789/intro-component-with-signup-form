const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const firstName = document.getElementById('first_name')
const lastName = document.getElementById('last_name')
const email = document.getElementById('email')
const password = document.getElementById('password')

function showError(value, message) {
  const label = value.parentElement
  const small = label.querySelector('small')
  const icon = label.querySelector('img')
  const input = label.querySelector('input')

  if (value.value === '') {
    small.innerText = message
    icon.style.display = 'block'
    input.style.borderColor = 'red'
  } else {
    small.innerText = ''
    icon.style.display = 'none'
    input.style.borderColor = 'hsl(246, 25%, 77%)'
  }
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

  showError(firstName, 'First name cannot be empty')
  showError(lastName, 'Last name cannot be empty')
  showError(password, 'Password cannot be empty')
  checkEmail(email)
}

form.addEventListener('submit', onSubmit)

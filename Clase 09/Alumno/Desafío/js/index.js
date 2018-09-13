console.log('Init app')

var emailNode = document.getElementById('email')

emailNode.onblur = validateEmail

function validateEmail (event) {
  var inputNode = event.target

  var value = inputNode.value

  var regexEmail = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/

  if (!regexEmail.test(value)) {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }
}
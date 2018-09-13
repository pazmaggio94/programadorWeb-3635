console.log('Init app')

var firstNameNode = document.getElementById('firstName')

firstNameNode.onblur = validateFirstName

function validateFirstName (event) {
  var inputNode = event.target

  var value = inputNode.value

  if (isNaN(parsedValue)) {
  	inputNode.classList.add('is-invalid')
  	inputNode.classList.add('is-valid')
  } else if (parsedValue >= 0) {
  	inputNode.classList.add('is-valid')
  	inputNode.classList.add('is-invalid')
  } else {
  	inputNode.classList.add('is-invalid')
  	inputNode.classList.add('is-valid')
  }

} 



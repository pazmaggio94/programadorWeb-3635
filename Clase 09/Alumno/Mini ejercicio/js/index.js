console.log('Init app')

var submitButton = document.getElementById('button')

submitButton.onclick = validateAge

function validateAge () {

	var ageNode = document.getElementById('age')

	var value = ageNode.value

	if (value >= 18) {
		console.log('Sos mayor de edad') }
		else {
			console.log('Sos menor de edad')
		}
	}
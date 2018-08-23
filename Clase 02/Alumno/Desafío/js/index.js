console.log('Init app')

var gender = prompt('Ingrese su género')

var age = prompt('Ingrese su edad')

var message = ' '


switch (gender) {
	case 'male':
	case 'hombre':
	case 'señor':
	message = message + 'Sr.'
	break
	case 'female':
	case 'mujer':
	case 'señora':
	message = message + 'Sra.'
	break
	default:
	message = message + 'Sx.'
	break
}


if (age <= 18) {
	message = message + 'usted es menor de edad no puede ingresar'
} else {
	message = message + 'usted es mayor de edad puede ingresar'
}

console.log(message)

























console.log('Init app')

var weekDay = prompt('qué día es hoy?')

switch (weekDay) {
	case 'lunes':
	console.log ('hábil')
	break
	case 'martes':
	console.log ('hábil')
	break
	case 'miércoles':
	console.log ('hábil')
	break
	case 'jueves':
	console.log ('hábil')
	break
	case 'viernes':
	console.log ('hábil')
	break
	case 'sábado':
	console.log ('fin de semana')
	break
	case 'domingo':
	console.log ('fin de semana')
	break
	default:
	console.log('no es un día valido')
	break
}

// o de esta forma - tambien se pueden agregar las diferentes formas de escribir cada dia, con o sin tilde..   

var dayOfTheWeek = prompt('qué día es hoy?')

switch (dayOfTheWeek) {
  case 'Lunes':
  case 'Martes':
  case 'Miércoles':
  case 'Jueves':
  case 'Viernes':
    console.log('Es un día hábil')
    break
  case 'Sábado':
  case 'Domingo':
    console.log('Es un día de fin de semana')
    break
  default:
    console.log('El día ingresado no es valido')
    break
}




















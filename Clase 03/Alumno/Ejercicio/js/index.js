console.log('Init app')


var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

var day 

for (var i = 0; i < daysOfTheWeek.lenght; i++) {

	day = daysOfTheWeek[i]

	switch (day) {
	  case 'Lunes':
	  case 'Martes':
	  case 'Miércoles':
	  case 'Jueves':
	  case 'Viernes':
	    console.log (day + ' es un día habíl')
	    break
	  case 'Sábado':
	  case 'Domingo':
	    console.log(day + ' es día de fin de semana')
	    break
	  default:
	    console.log(day + ' no es un día!')
	    break
		}

}















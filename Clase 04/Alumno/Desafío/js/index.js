console.log('Init app')

var name = prompt ('Ingrese nombre') 

var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

function showResult (studentsList) {
var index = -1
var student 

	for (var i = 0; i < studentsList.length; i++) {
	student = studenstList[i]

    return index
	}

	if(name === student[i].firstName){
		console.log('Se encontró el alumno en la posición '+ i)
	}else{
		console.log('No se encontró el nombre del alumno ')
	} } 
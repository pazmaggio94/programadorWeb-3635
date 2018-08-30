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



function showStudent (text, studentsList) {

var student 

	for (var i = 0; i < studentsList.length; i++) {
	student = studenstList[i]

	if(text === student.firstName || text === student.lastName){
		
		return i
	} }

	return -1

    } 

var text = 'Juan'

var result = showStudent(text, studentsList)

if result = showStudent ()














	
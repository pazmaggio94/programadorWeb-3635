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



function searchStudent (text, studentsList) {

var student 

	for (var i = 0; i < studentsList.length; i++) {
	student = studentsList[i]

	 if(text === student.firstName || text === student.lastName){
		
		return i
	 } 
  }

	return -1

    } 

var text = 'Juan'

var result = searchStudent(text, studentsList)

if (result !== -1) {
  console.log ('Encontré al usuario ' + text + ' en la posición: ' + result) 
  } else {
  console.log ('No encontré al usuario ' + text) 

}

var text1 = 'Ana'

var result1 = searchStudent(text1, studentsList)

if (result1 !== -1) {
  console.log ('Encontré al usuario ' + text1 + ' en la posición: ' + result1) 
  } else {
  console.log ('No encontré al usuario ' + text1) 

}

var text2 = 'Pedro'

var result2 = searchStudent(text2, studentsList)

if (result2 !== -1) {
  console.log ('Encontré al usuario ' + text2 + ' en la posición: ' + result2) 
  } else {
  console.log ('No encontré al usuario ' + text2) 

}

var text3 = 'Pablo'

var result3 = searchStudent(text3, studentsList)

if (result3 !== -1) {
  console.log ('Encontré al usuario ' + text3 + ' en la posición: ' + result3) 
  } else {
  console.log ('No encontré al usuario ' + text3) 

}














	
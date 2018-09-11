console.log('Init app')



// var listNode = document.getElementById('mainList')

// var newStudentsName = [ 'Ed', 'Edd', 'Eddy' ]

// var newStudent

// for (var i = 0; i < newStudentsName.length; i++) {
//   newStudent = newStudentsName[i]

//   var nameNodeLi = document.createElement('li')

//   nameNodeLi.innerHTML = newStudent

//   nameNodeLi.id = newStudent

//   listNode.appendChild(nameNodeLi)
// }


var listNode = document.getElementById('mainList')

var studentsList = [ 'Ed', 'Edd', 'Eddy' ]

var studentname

var students = prompt('Ingresa nombre del alumno')

for (var i = 0; i < studentsList.length ; i++) {
	studentname = studentsList[i]

listNode.innerHTML = ''

var liNode = document.createElement('li')

liNode.innerHTML = students

liNode.className = 'list-group-item'

listNode.appendChild(liNode)
}











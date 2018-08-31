console.log('Init app')


function Student (firstName, lastName, dni, email) {
	
	var id = Math.random() //o var id = dni (podria ser)

  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  this.email = email

  this.getId = function () {
	return id
  }

  this.getFullName = function () {
  	if (this.fistName && this.lastName) {
  		return this.firstName + ' ' + this.lastName
  	} else if (this.firstName && !this.lastName) {
  		return this.firstName
  	} else if ( !this.firstName && this.lastName) {
  		return this.lastName
  	} else {
  		return ''
  	}
   }
  }


var oldStudents = [
	{ firstName: 'Juan', lastName: 'Pérez', dni: 45678989, email: 'juan@gmail.com' },

	{ firstName: 'Ana', lastName: 'Fernandez', dni: 45678987 , email: 'ana@gmail.com' },

	{ firstName: 'Juan', lastName: 'Pérez', dni: 45678956, email: 'pedro@gmail.com'}
	
	]


var oldStudent

var newStudent

for (var i = 0; i < oldStudents.length; i++) {
	oldStudent = oldStudents[i]
	newStudent = new Student (
		oldStudent.firstName,
		oldStudent.lastName,
		oldStudent.dni,
		oldStudent.email
		)

	console.log(newStudent.getId(), newStudent.getFullName())

}



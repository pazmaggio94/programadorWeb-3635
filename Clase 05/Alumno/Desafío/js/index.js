console.log('Init app')

var students //hacer array con 

function Student (firstName, lastName, dni, email) {
	var id = Math.random()

  // Cuerpo de la función
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
  		return !this.firstName + ' ' + this.lastName
  	} 
    
  }

}


var newStudent

var newStudent1 = new Student('Pepe', 'Perez', 45678989, 'juan@gmail.com')

console.log(newStudent1, newStudent1.getId())


var newStudent2 = new Student('Ana', 'Fernandez',45678987, 'ana@gmail.com')

console.log(newStudent2, newStudent2.getId())


var newStudent3 = new Student('Pedro', 'Mármol', 45678956, 'pedro@gmail.com')

console.log(newStudent3, newStudent3.getId())


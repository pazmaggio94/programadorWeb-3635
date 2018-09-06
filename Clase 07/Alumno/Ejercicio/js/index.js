console.log('Init app')

// var savedStudentsList = localStorage.getItem('studentsList')

// var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']

// // if (!savedStudentsList) {
// //   var firstName = prompt('Ingresa tu nombre')

// //   var testList = {
// //     firstName: firstName 
// //   }

//   var stringyTestList = JSON.stringify(testList)

//   localStorage.setItem('testList', stringyTestList)

//   console.log(stringyTestList)




// var savedStudentsList = localStorage.getItem('studentsList')

// var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']

// var stringyTestList = JSON.stringify(testList)

// var parsedTestList = JSON.parse(stringyTestList)

// localStorage.setItem('studentsList', testList)

// console.log(parsedTestList)


function setLocalList (key, list) {

	if (typeof key === 'string' && Array.isArray(list)) {

		var strList = JSON.stringify(list)

		localStorage.setItem(key, strList)
		}
	}

var savedList = getLocalList('list')

var firstName = firstName

var lastName = lastName
















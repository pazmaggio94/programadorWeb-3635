console.log('Init app')


var savedStudentsList = localStorage.getItem('studentsList')

var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']

var stringyTestList = JSON.stringify(testList)

var parsedTestList = JSON.parse(stringyTestList)

localStorage.setItem('studentsList', testList)

console.log(parsedTestList)

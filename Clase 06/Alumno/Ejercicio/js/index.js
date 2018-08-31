console.log('Init app')

var numbers = [1,2,3,4,5]


function newNumbers(index, numbersArray) {
  //copiar array
  //eliminar elemento
  //devolver el array

  if (Array.isArray(numbersArray)) {
  var newNumber = numbersArray.slice()

  newNumber.splice( index, 1)

  return newNumber

}
}

var result = newNumbers(3, numbers) //devuelve el nuevo array

var result2 = newNumbers(2, numbers) //devuelve el nuevo array

console.log(numbers)
console.log(result)
console.log(result2)
console.log('Init app')

var operation = prompt ('Ingrese una operación a realizar, sum, res, mul o div')

var value1 = prompt ('Ingrese un primer número')

var parsedValue1 = parseInt(value1, 10)

var value2

var parsedValue2 = parseInt(value2, 10)


do {
    parsedValue2 = prompt ('Ingrese el segundo número')

		} while (operation === 'div' && parsedValue2 === 0 )

		
switch (operation) {
  	case 'sum':
    console.log ('El resultado de la ' + operation + ' es: ' + ( parsedValue1 + parsedValue2))
    break
    case 'res':
    console.log ('El resultado de la ' + operation + ' es: ' + ( parsedValue1 - parsedValue2))
    break 
    case 'mul':
    console.log ('El resultado de la ' + operation + ' es: ' + ( parsedValue1 * parsedValue2))
    break 
    case 'div':
    console.log ('El resultado de la ' + operation + ' es: ' + ( parsedValue1 / parsedValue2))
    break

	}








console.log ('Init app')

var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]

function showResult (examResults) {
	
	var result 
	var sum = 0
	

	for (var i = 0; i < examResults.length; i++) {
	result = examResults[i]
    sum = sum + result
	}

	var resultfinal = sum / examResults.length 

	
	return resultfinal
	}

	var result = showResult(examResults)

	if(result >= 6){
		console.log('Aprobaste con '+result)
	}else{
console.log('Desaprobaste con '+result)
	}

	console.log(result)


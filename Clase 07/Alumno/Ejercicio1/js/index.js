console.log('Init app')


var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']

function setLocalList (key, list) {
	if (typeof key === 'string' && Array.isArray(list)) {
		
		var strList = JSON.stringify(list)

		localStorage.setItem(key,strList)
	}
}

setLocalList('testList', testList)

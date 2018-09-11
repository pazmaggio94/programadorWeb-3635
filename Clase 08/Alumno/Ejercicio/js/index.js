console.log('Init app')


var studentsList = [ 'Ed', 'Edd', 'Eddy' ]

var listNode = document.getElementById('mainList')

var studentname


for (var i = 0; i < studentsList.length ; i++) {

var liNode = document.createElement('li')

liNode.innerHTML = studentsList[i]

liNode.className = 'list-group-item'

listNode.appendChild(liNode)
}











console.log('Init app')

var inputText = $('#firstName')

inputText.blur(validateField)

function validateField(event) {
    var liNodes = $('li')

    var inputNode = $(event.target)
    var value = inputNode.val()

   liNodes.html(value)

}


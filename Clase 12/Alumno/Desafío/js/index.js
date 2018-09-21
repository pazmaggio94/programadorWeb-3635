console.log('Init App')

var emailNode = $('#email')

emailNode.blur (validateEmailField)

function validateEmailField () {
    var inputNode = $(this)

    var value = inputNode.val()

    if (!inputNode.value ||
        inputNode.value.indexOf('@') === -1 ||
        inputNode.value.indexOf('.') === -1
        ) {
        inputNode.addClass('is-valid')
        inputNode.removeClass('is-invalid')
        } else {
        inputNode.removeClass('is-invalid')
        inputNode.addClass('is-valid')
          }
        }


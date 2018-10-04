console.log('Init app')

var firstNameNode = $('#firstName')
firstNameNode.one('blur', validateRequiredField)

var emailNode = $('#email')
emailNode.one('blur', validateEmailField)

var commentsNode = $('#comments')
commentsNode.one('blur', validateRequiredField)

var submitButtonNode = $('#submitButton')

function validateRequiredField (event) {
  var inputNode = $(this)

  var value = inputNode.val()
  inputNode.next().remove()

  if (!value) {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')
    inputNode
      .parent()
      .append('<div class="invalid-feedback">Debe tener contenido</div>')
  } else {
    inputNode.removeClass('is-invalid')
    inputNode.addClass('is-valid')
  }
  validateSubmitButton()
}

function validateEmailField (event) {
  var inputNode = $(this)

  var value = inputNode.val()

  if (!value) {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')
    inputNode
      .parent()
      .append('<div class="invalid-feedback">Campo requerido</div>')
  } else {
    if (value.indexOf('@') === -1) {
      inputNode.removeClass('is-valid')
      inputNode.addClass('is-invalid')
      inputNode
        .parent()
        .append('<div class="invalid-feedback">Debe contener @</div>')
    } else {
      if (value.indexOf('.') === -1) {
        inputNode.removeClass('is-valid')
        inputNode.addClass('is-invalid')
        inputNode
          .parent()
          .append('<div class="invalid-feedback">Debe contener .</div>')
      }
    }
  }

  if (!value || value.indexOf('@') === -1 || value.indexOf('.') === -1) {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')
  } else {
    inputNode.removeClass('is-invalid')
    inputNode.addClass('is-valid')
  }

  validateSubmitButton()
}

function validateSubmitButton () {
  var inputFieldsNode = $('.is-valid')

  if (inputFieldsNode.length === 3) {
    submitButtonNode.attr('disabled', false)
  } else {
    submitButtonNode.attr('disabled', true)
  }
}

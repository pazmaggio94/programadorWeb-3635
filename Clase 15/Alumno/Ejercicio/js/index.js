$(document).ready(function () {
  console.log('Init HP app')

  var ajaxCall = $.ajax('https://swapi.co/api/people/5/')
    .done(function (data) {
      console.log('OK ', data)
    })
    .fail(function (error) {
      console.log('falló algo', error)
    })
})

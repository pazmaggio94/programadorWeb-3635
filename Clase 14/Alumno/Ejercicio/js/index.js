$(document).ready(function () {
  console.log('Init HP app')

  $('.btn').click(function () {
    $(this).parent().parent().fadeOut(2000, function () {
      $(this).remove()
    })
  })
})

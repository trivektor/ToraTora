$(function() {
  
  var tora = new Tora
  
  $("#message").keypress(function(event) {
    if (event.which == 13) {
      tora.send($(this).val())
      $(this).val("")
    }
  })
  
  
  
})
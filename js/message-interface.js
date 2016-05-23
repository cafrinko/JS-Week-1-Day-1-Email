var Message = require('./../js/message.js').Message;
$(document).ready(function(){
  $('#email').submit(function(event){
    event.preventDefault();
    var toField = $('#to').val();
    var fromField = $('#from').val();
    var subjectField = $('#subject').val();
    var messageField = $('#messageInput').val();

    var newMessage = new Message(toField, fromField, subjectField, messageField);
    console.log(newMessage.read());

    $('#emailMessage').text(newMessage.read());
    $('#message').show();
  });
});

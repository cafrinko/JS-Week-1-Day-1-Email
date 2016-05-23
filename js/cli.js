var Message = require('./message.js').Message;
var prompt = require('prompt');
prompt.start();

var to;
var from;
var messageText;
prompt.get('to', function(err, result){
  to = result.to;
});
prompt.get('from', function(err, result){
  from = result.from;
});
prompt.get('messageText', function(err, result){
  messageText = result.messageText;
});

  var newMessage = new Message(to, from, messageText);
  console.log(newMessage.read());



// prompt.get('To', 'From', 'Message', function(err, result){
//   var To = Message.to(result.To);
//   var From = Message.from(result.From);
//   var Message = Message.message(result.Message);
//   var newMessage = new Message(To, From, Message);
//   console.log(newMessage.read());
// });

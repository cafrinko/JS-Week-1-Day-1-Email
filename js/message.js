exports.Message = function(to, from, subject, messageText){
  this.to = to;
  this.from = from;
  this.subject = subject;
  this.messageText = messageText;
}

exports.Message.prototype.read = function(){
  return "Dear " + this.to + ", This is an email regarding: " + this.subject + ". " + this.messageText + " Yours truly, " + this.from;
}

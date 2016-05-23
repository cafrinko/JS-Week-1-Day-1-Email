exports.Message = function(to, from, subject, messageText){
  this.to = to;
  this.from = from;
  this.subject = subject;
  this.messageText = messageText;
}

exports.Message.prototype.read = function(){
  return "Dear " + this.to + ", This is an email regarding: " + this.subject + ". " + this.messageText + " Yours truly, " + this.from;
}

exports.Message.prototype.encode = function(){
  //split message into letters;
  //reverse letters;
  //join letters;
  //split letters by spaces;
  //join letters by spaces;
  return this.messageText.split("").reverse().join("").split(" ").join(" ");
};

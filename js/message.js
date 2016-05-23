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
  var wordArray = this.messageText.split(" ");
  for(var i = 0; i < wordArray.length; i++){
    var splitWord = wordArray[i].split("");
    var letterArray = [];
    letterArray.push(splitWord);
  };
  for (var j = 0; j < letterArray.length; j++){
    var almostReverse = letterArray[j].reverse();
    var reverseLetterArray = [];
    reverseLetterArray.push(almostReverse);
    console.log(reverseLetterArray);
  }
  };

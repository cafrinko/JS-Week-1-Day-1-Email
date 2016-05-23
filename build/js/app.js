(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    console.log(newMessage.encode());

    $('#emailMessage').text(newMessage.encode());
    $('#message').show();
  });
});

},{"./../js/message.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);

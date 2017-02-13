//  DESCRIBE 'chatterbox' //
const app = {

};

$(document).ready(function () {


  // DESCRIBE 'init'  //

  app.init = function () {
    $('#chats').on('click', '.username', app.handleUsernameClick);
  };


  //  DESCRIBE 'app behavior' //

  // DESCRIBE 'sending'   //
  app.send = function(message) {
    $.ajax({
      url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contextType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        console.log('chatterbox: Failed to send message', data);
      }
    });
  };

  //  DESCRIBE 'fetching'  //
  app.fetch = function() {
    $.ajax({
      server: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      success: function () {
        console.log('Success');
      },
      error: function () {
        console.log('chatterbox: Failed to get');
      }
    });
  };

  //  TODO: DESCRIBE 'chatroom behavior'  //

  app.clearMessages = function() {
    // TODO: should be able to clear messages from the DOM --delete
    $('#chats').empty();
  };

  app.renderMessage = function(message) {
    // TODO: should be able to add messages to the DOM
    $('#chats').append('<span class=username' + ' data=' + message.roomname + '>' + message.text + '</span>');
  };

  app.renderRoom = function(room) {
    // TODO: should be able to add rooms to the DOM
    $('#roomSelect').append('<div>' + room + ' </div>');
  };


  //  TODO: DESCRIBE 'events'  //

  app.handleUsernameClick = function() {
    // TODO: should add a friend upon clicking their username
    return true;
  };

  app.handleSubmit = function() {
    // TODO: should try to send a message upon clicking submit
  };
});

//  DESCRIBE 'chatterbox' //
const app = {
  server: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages'
};

$(document).ready(function() {


  // DESCRIBE 'init'  //

  app.init = function () {
    $('#chats').on('click', '.username', function(data) {
      var node = data.currentTarget;
      app.handleUsernameClick(node);
    });
    $('input').on('submit', '.submit', app.handleSubmit);
    app.fetch();
  };

  //  DESCRIBE 'app behavior' //

  // DESCRIBE 'sending'   //
  app.send = function(message) {
    $.ajax({
      url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent', data);
      },
      error: function (data) {
        console.log('chatterbox: Failed to send message', data);
      }
    });
  };

  //  DESCRIBE 'fetching'  //
  app.fetch = function() {
    return $.ajax({
      url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        var messages = data.results;
        messages.forEach(function(message) {
          app.renderMessage(message);
        });
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
    $('#chats').append('<div class="chat ' + message.username + '" data=' + message.roomname + '>' + '<span class="username ' + message.username + '"><a href="#">' + message.username + ': </a></span>' + message.text + '</div>');
  };

  app.renderRoom = function(room) {
    // TODO: should be able to add rooms to the DOM
    $('#roomSelect').append('<div>' + room + ' </div>');
  };

  //  TODO: DESCRIBE 'events'  //

  app.handleUsernameClick = function(element) {
    // TODO: should add a friend upon clicking their username
    var classes = $(element).attr('class');
    var username = classes.split(' ')[1];
    $('.' + username).addClass('friend');
  };

  app.handleSubmit = function() {
    // TODO: should try to send a message upon clicking submit

  };

  app.init();
});

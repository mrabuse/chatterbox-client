//  DESCRIBE 'chatterbox' //

const app = {

};

// DESCRIBE 'init'  //

app.init = function () {};

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
app.fetch = function(string) {
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
  // TODO: should be able to clear messages from the DOM
};

app.renderMessage = function(message) {
  // TODO: should be able to add messages to the DOM
};

app.renderRoom = function(room) {
  // TODO: should be able to add rooms to the DOM
};


//  TODO: DESCRIBE 'events'  //

app.handleUsernameClick = function() {
  // TODO: should add a friend upon clicking their username
};

app.handleSubmit = function() {
  // TODO: should try to send a message upon clicking submit
};

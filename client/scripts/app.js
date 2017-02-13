// YOUR CODE HERE:
const app = {

};

app.init = function () {};

app.send = function(message) {
  $.ajax({
    url: "http://parse.atx.hackreactor.com/chatterbox/classes/messages",
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

app.fetch = function(string) {
  $.ajax({
    server: "http://parse.atx.hackreactor.com/chatterbox/classes/messages",
    type: 'GET',
    success: function () {
      console.log('Success');
    },
    error: function (){
      console.log('chatterbox: Failed to get');
    }
  });
};

var io     = require('socket.io-client');

// var socket = io.connect('http://nrs-pi-server.herokuapp.com');
var socket = io.connect('http://localhost:5000');

socket.on('slam-data-transfer', function() {
  console.log("receving slam data!")

  // instructions for raspberry pi go here
  console.log('doing some stuff with it')
  // display the data maybe?
  
} );

socket.on('connect', function () { 
  console.log("Connected to server");
});

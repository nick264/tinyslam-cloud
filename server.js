var io         = require('socket.io');
var express    = require('express');
var bodyParser = require('body-parser');
// var sms        = require('./sms.js')

var app = express()
  , server = require('http').createServer(app)
  , io = io.listen(server)
  , port = process.env.PORT || 5000;

server.listen(port);

console.log('http server listening on %d', port);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.send("I am working!\n");
});

app.get('/status', function(req,res){
  if( io.sockets.server.eio.clientsCount > 0 ) {
    res.send("Connected to " + io.sockets.server.eio.clientsCount + " client(s)\n");
  } else {
    res.send("Not connected to any clients\n");
  }
});

app.post('/lidar-data-transfer', function(req,res){
  io.sockets.emit('slam-data-transfer');
  res.send("OK\n");
} );

io.sockets.on('connection', function (socket) {
  console.log('new socket client connected')
});
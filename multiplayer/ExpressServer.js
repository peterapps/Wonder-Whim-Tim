/*var
	gameport = process.env.PORT||4004,
	
	io = require('socket.io'),
	express = require('express'),
	UUID = require('uuid'),
	path = require('path'),
	
	
	verbose = false,
	app = express();


app.use(express.static(path.resolve(__dirname + '/../src/')));
	
app.listen( gameport );

console.log('\t :: Express :: Listening on port ' + gameport);

app.get( '/', function( req, res){
	res.sendFile(path.resolve(__dirname + '/../src/index.html'));
});

app.get('/*', function( req, res, next){
	var file = req.params[0];
	if (file!='socket.io/socket.io.js'){
		file = "../src/"+ file;
	}
	if(verbose) console.log('\t :: Express :: file requested : ' + file);
	
	res.sendFile(path.resolve(__dirname+'/'+ file));
});



io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});*/
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var path = require('path');
var UUID = require('uuid');

app.use(express.static(path.resolve(__dirname + '/public/')));

var gameport = 4004;
server.listen(gameport);
console.log('\t :: Express :: Listening on port ' + gameport);

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/public/index.html'));
});

io.on('connect', function (socket) {
  console.log("Houston, we have a connection");
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
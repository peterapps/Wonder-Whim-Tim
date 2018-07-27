var
	gameport = process.env.PORT||4004,
	
	io = require('socket.io'),
	express = require('express'),
	UUID = require('uuid'),
	path = require('path'),
	
	
	verbose = false,
	app = express();
	
app.listen( gameport );

console.log('\t :: Express :: Listening on port ' + gameport);

app.get( '/', function( req, res){
	res.sendFile(path.resolve(__dirname + '/../src/index.html'));
});

app.get('/*', function( req, res, next){
	var file = req.params[0];
	
	if(verbose) console.log('\t :: Express :: file requested : ' + file);
	
	res.sendFile(path.resolve(__dirname+ '/../src/'+file));
});


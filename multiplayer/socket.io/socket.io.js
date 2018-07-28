var sio = io.listen(app);

sio.configure(function() {
	sio.set('log level', 0);
	
	sio.set('authorization', function(handshakeData,callback) {
		callback(null, true);
	});
	
});

sio.sockets.on('connection', function (client) {
	client.userid = UUID();
	
	client.emit('onconnected', { id: client.userID } );
	
	console.log('\t socket.io:: player ' + client.userid + ' connnected');
	
	client.on('disconnect', function () {
		
		console.log('\t socketio:: client disconnected ' + client.userid );
		
	});

});
	

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function( reg, res ) {
	
	res.sendFile(__dirname + '/index.html');
	
});

app.get('/show', function( reg, res ) {
	
	res.sendFile(__dirname + '/show.html');
	
});


io.on('connection' , function(socket){
	socket.on('update prop', function(prop) {
		console.log('new prop is : ' + prop );
	});
});

io.on('connection', function(socket){
		socket.on('update prop', function(prop){
			io.emit('update prop', prop);
		});
});


http.listen( 3000, function(){
	console.log('listening on *:3000');
	
});
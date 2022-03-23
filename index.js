const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { Room } = require('./Room');
const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

io.on('connection', (socket) => {
	socket.on('room', (msg) => {
		const data = JSON.stringify(msg);
		console.log("MESSAGE: ")
		console.log(msg);
		const myroom = new Room(msg);
	  console.log('room: ' + data);
	  console.log("room name :" + myroom.name)
	});
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});
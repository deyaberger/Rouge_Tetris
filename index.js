const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { RoomManager } = require('./Room');
const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

const room_manager = new RoomManager();
 

io.on('connection', (socket) => {
	console.log('a user connected');
	console.log(socket.id);
	socket.on('room', (msg) => {
		room_manager.handle_socket_msg(msg, socket.id);
		console.log(all_rooms);
	});
	socket.on('disconnect', () => {
		console.log('user disconnected');
		console.log(socket.id);
		// room_manager(msg, all_rooms, io);
	  });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});
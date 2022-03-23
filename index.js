const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { AllRooms, room_manager } = require('./Room');
const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

const all_rooms = new AllRooms();
 

io.on('connection', (socket) => {
	socket.on('room', (msg) => {
		room_manager(msg, all_rooms, io);
		console.log(all_rooms);
	});
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});
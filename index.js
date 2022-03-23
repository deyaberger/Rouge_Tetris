const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { AllRooms, Room } = require('./Room');
const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

const all_rooms = new AllRooms();

const room_manager = function(msg, all_rooms) {
	if (all_rooms.exists(msg.room_name) == false) {
		console.log("Creating Room [" + msg.room_name + "]")
		const room = new Room(msg, all_rooms.count);
		all_rooms.add(room);
	}
	else {
		console.log("Room [" + msg.room_name + "] already exists!")
	}
} 

io.on('connection', (socket) => {
	socket.on('room', (msg) => {
		room_manager(msg, all_rooms);
		console.log();
		console.log(all_rooms);
	});
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});
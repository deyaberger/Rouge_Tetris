const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { RoomManager } = require('./src/Room');
const io = new Server(server, {
	cors : {
		methods: ["GET", "POST"] 
	}
});

const room_manager = new RoomManager();
 

io.on('connection', (socket) => {
	socket.emit("hello", "world");
	console.log('a user connected');
	socket.on('room', (msg) => {
		room_manager.handle_socket_msg(msg, socket.id, io);
		console.log(room_manager.global_rooms_list);
	});
	socket.on('disconnect', () => {
		room_manager.remove_user(socket.id);
		console.log('user disconnected');
		console.log(room_manager.global_rooms_list);
		console.log(room_manager.global_players_list);
	  });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});

// io.on("connection", (socket) => {
// 	socket.use((packet, next) => {
// 	  console.log("PAQUET", packet);
// 	  next(new Error("Une erreur !"));
// 	});
//   });

// // Côté serveur :
// socket.emit('événement', 'données', (data) => {
// 	console.log(data); // 42
//   });
  
//   // Côté client :
//   socket.on('événement', (message, ack) => {
// 	ack(42);
//   });
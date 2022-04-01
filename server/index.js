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
	console.log('a user connected');

	var room = null;
	var player = null;
	socket.on('join_room', (msg) => {
		room = room_manager.handle_socket_msg(msg, socket);
		player = room.players_list[socket.id];
	});



// 	var game = null
// 	socket.on("start", (msg) => {
// 		game = room.start()
// 		emit("game_state", room.get_state(ID))
// 	})

// 	socket.on("action", (msg) => {
// 		game.do_action(msg, playerID)
// 		emit("game_state", room.get_state())
// 	})


// 	socket.on('disconnect', () => {
// 		room_manager.remove_user(socket.id, io);
// 		console.log('user disconnected');
// 		console.log(room_manager.global_rooms_list);
// 		console.log(room_manager.global_players_list);
// 	  });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});

// const seedrandom = require('seedrandom');
// const generator = seedrandom(10);
// for (let index = 0; index < 10; index++) {
// 	console.log("tetris nb: " + Math.round(generator() * 10) + 1 + ", rotation: " + Math.round(generator() * 10) % 4 + ", position: (" + Math.round(generator() * 10) + ",  " + Math.round(generator() * 10) + ")");
// }
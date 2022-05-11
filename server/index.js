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

function disconnect(room, socket) {
	console.log("room");
	console.log(room);
	if (room != null) {
		console.log("removing room")
		room.remove_player(socket); // Check if not better IO
		if (room.master == null) {
			room_manager.remove_room(room.name)
		}
		console.log(room_manager.global_rooms_list)
	}
}


io.on('connection', (socket) => {
	console.log('a user connected');

	var room = null;
	var player = null;
	socket.on('join_room', (msg) => {
		console.log("Joining Room");
		room = room_manager.handle_socket_msg(msg, socket);
		if (room != null) {
			player = room.players_list[socket.id];
			console.log(room_manager.global_rooms_list)
		}
	});

	socket.on('start', (msg) => {
		console.log("starting");
		if (room != null && room.master == player.name) {
			room.game.on = true;
		room.game.start(io, room); }
	})

	socket.on('state', (msg) => {
		console.log("Stattte please");
		if (room != null) {
			socket.emit("game_state", room.get_state(socket.id));
		}
	})

	socket.on('pause', (msg) => {
		console.log("pause please");
		if (room != null && msg == true) {
			room.game.pause();
		}
	})

	socket.on('continue', (msg) => {
		console.log("continue please");
		if (room != null && msg == true) {
			room.game.start(io, room);
		}
	})

	socket.on('colors', (msg) => {
		console.log("colors please");
		if (room != null) {
			room.colors = msg;
			socket.to(room.name).emit("a_player_left", true); //! Change event name!!
		}
	})

	socket.on('move', (msg) => {
		// console.log("Move  please");
		if (room != null && player != null && room.game.on == true) {
			player.tetris.apply_move(msg);
			socket.emit("game_state", room.get_state(socket.id));
		}

	})

	socket.on('stop', (msg) => {
		console.log("Stop  please");
		if (room != null && room.game.on == true) {
			room.game.stop(io, room);
		}
	})

	socket.on('restart', (msg) => {
		console.log("Restart  please");
		if (room != null && room.game.on == false) {
			room.game.restart(io, room);
		}
	})

	socket.on('quit', () => {
		console.log("Quit  please");
		if (room != null) {
			console.log("Quitting");
			console.log("room before");
			console.log(room);
			disconnect(room, socket);
		}
	});

	socket.on("disconnect", (reason) => {
		console.log("A client just left");
		disconnect(room, socket);
	  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});


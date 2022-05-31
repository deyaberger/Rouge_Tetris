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

	socket.on("room_info", () => {
		socket.emit("room_state", room_manager.get_state());
	});

	var room = null;
	var player = null;
	socket.on('join_room', (msg) => {
		console.log("Joining Room");
		room = room_manager.handle_socket_msg(msg, socket);
		if (room != null && room != false) {
			player = room.players_list[socket.id];
			console.log(room_manager.global_rooms_list)
		}
	});

	socket.on('state_pong', (msg) => {
		if (room != null && player != null) {
			console.log("Stattte please");
			socket.emit("game_state", room.get_state(socket.id));
		}
	})

	socket.on('start', (msg) => {
		if (room != null && room.master == player.name) {
			console.log("starting");
			room.game.on = true;
		room.game.start(io, room); }
	})

	socket.on('pause', (msg) => {
		console.log("pause please");
		if (room != null) {
			if (msg == true) {
				room.game.pause(io, room.name);
			}
			else if (msg == false) {
				room.game.start(io, room);
			}
		}
	})

	// socket.on('continue', (msg) => { // ! We could make it just one msg with pause = false or true
	// 	console.log("continue please");
	// 	if (room != null) {
	// 		room.game.start(io, room);
	// 	}
	// })

	
	socket.on('move', (msg) => {
		// console.log("Move  please");
		if (room != null && player != null && room.game.on == true) {
			player.tetris.apply_move(msg);
			socket.emit("game_state", room.get_state(socket.id));
		}

	})

	socket.on('colors', (msg) => {
		console.log("colors please");
		if (room != null) {
			room.colors = msg;
			socket.to(room.name).emit("state_ping"); //! Change event name!! Or make it individual
		}
	})

	socket.on('ghost', (msg) => {
		console.log("ghost please");
		if (room != null && player != null && room.game.on == true) {
			player.tetris.show_ghost = msg;
			socket.emit("game_state", room.get_state(socket.id)); // ! Change if you want to make it general for all players
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

	socket.on('quit', () => { // ! IS there a difference with disconnect?
		console.log("Quit  please");
		if (room != null) {
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


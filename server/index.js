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
	console.log("\nRoom:");
	console.log(room.name);
	console.log("\Players before removing:");
	console.log(room.players_list);
	if (room != null) {
		console.log("\nremoving socket from room: " + socket.id)
		socket.leave(room.name);
		console.log("\nremoving player: " + socket.id)
		room.remove_player(socket); // Check if not better IO
		if (room.master == null) {
			console.log("\nremoving room")
			room_manager.remove_room(room.name)
		}
		// console.log(room_manager.global_rooms_list)
	}
}


io.on('connection', (socket) => {
	console.log('\na user connected: ' + socket.id);

	socket.on("room_info", () => {
		console.log("\nAsking for room info: " + socket.id)
		var state = room_manager.get_state()
		console.log("ROOMS INFOS:")
		console.log(room_manager.get_rooms_info())
		// socket.emit("room_state", state);
		socket.emit("room_state", room_manager.get_rooms_info());
		console.log("\nAFTER ROOM INFO: " + socket.id)
	});

	var room = null;
	var player = null;
	socket.on('join_room', (msg) => {
		console.log("\nJoining Room: " + socket.id + "\n");
		console.log(msg);
		room = room_manager.handle_socket_msg(msg, socket);
		if (room != null && room != false) {
			console.log("\nCreating player for room: " + room.name + "  :" + socket.id);
			player = room.players_list[socket.id];
			// console.log(room_manager.global_rooms_list)
		}
	});

	socket.on('state_pong', (msg) => {
		if (room != null && player != null && room != undefined && player != undefined) {
			console.log("\nState Pong: " + socket.id)
			console.log("room:")
			console.log(room)
			socket.emit("game_state", room.get_state(socket.id));
		}
	})

	socket.on('start', (msg) => {
		if (room != null && room.master == player.name) {
			console.log("\nStarting game: " + socket.id)
			room.game.on = true;
			room.game.start(io, room);
		}
	})

	socket.on('pause', (msg) => {
		if (room != null) {
			if (msg == true) {
				console.log("\npause please: " + socket.id);
				room.game.pause(io, room.name);
			}
			else if (msg == false) {
				console.log("\ncontinue please: " + socket.id);
				room.game.start(io, room);
			}
		}
	})

	
	socket.on('move', (msg) => {
		if (room != null && player != null && room.game.on == true) {
			console.log("\nmove: " + socket.id);
			player.tetris.apply_move(msg);
			socket.emit("game_state", room.get_state(socket.id));
		}

	})

	socket.on('colors', (msg) => {
		if (room != null) {
			console.log("\ncolors: " + socket.id);
			room.colors = msg;
			socket.to(room.name).emit("state_ping");
		}
	})

	socket.on('ghost', (msg) => {
		if (room != null && player != null && room.game.on == true) {
			console.log("\nghost: " + socket.id);
			player.tetris.show_ghost = msg;
			socket.emit("game_state", room.get_state(socket.id));
		}

	})

	socket.on('stop', (msg) => {
		console.log("\nStop  please: " + socket.id);
		if (room != null && room.game.on == true) {
			console.log("\nStop: " + socket.id);
			room.game.stop(io, room);
		}
	})

	socket.on('restart', (msg) => {
		console.log("\nRestart  please: " + socket.id);
		if (room != null && room.game.on == false) {
			console.log("\nRestart: " + socket.id);
			room.game.restart(io, room);
		}
	})

	socket.on('quit', () => { 
		console.log("\nQuit  please: " + socket.id);
		if (room != null) {
			console.log("\nQuit: " + socket.id);
			disconnect(room, socket);
		}
	});

	socket.on("disconnect", (reason) => {
		console.log("\ndisconnect  please: " + socket.id);
		if (room != null) {
			console.log("\ndisconnect: " + socket.id);
			disconnect(room, socket);
		}
	  });
});

server.listen(3000, () => {
  console.log('\nlistening on *:3000');
});


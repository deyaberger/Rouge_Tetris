const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
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
	if (room != null && room != false) {
		socket.leave(room.name);
		room.remove_player(socket);
		if (room.master == null) {
			room_manager.remove_room(room.name)
		}
	}
}

function isValid(token) {
	if (token != "astongertetristoken") {
		console.log("MiddleWare check: invalid!")
		return false
	}
	console.log("MiddleWare check: valid!")
	return true;
}

io.use((socket, next) => {
	/**
	 * This is our middleware: we check if our client has the right token to connect to our server
	 * once this is validated, the client can connect through the function io.on('connection')
	 */
	console.log("checkin middleware")
  if (isValid(socket.handshake.auth.token)) {
    next();
  } else {
    next(new Error("invalid"));
  }
});

io.on('connection', (socket) => {
	socket.on("room_info", () => {
		/**
		 * When a client his connected he can ask us for the rooms info: which rooms are available or not in which rooms
		 */
		socket.emit("room_state", room_manager.get_rooms_info());
	});

	var room = null;
	var player = null;

	socket.on('join_room', (msg) => {
		/**
		 * Here the clients creates a username and joins a room. It has to be a unique name and an available room or unexisting room
		 */
		room = room_manager.handle_socket_msg(msg, socket);
		if (room != null && room != false) {
			player = room.players_list[socket.id];
		}
	});

	socket.on('state_pong', (msg) => {
		/**
		 * the state pong replies to a ping: when we send a ping to all the clients in one room, each of them send us a pong so we can give them the necessary info one by one and not all at once
		 */
		if (room != null && player != null && room != undefined && player != undefined) {
			socket.emit("game_state", room.get_state(socket.id));
		}
	})

	socket.on('start', (msg) => {
		/**
		 * Only the master (first player to join a room) can decide wheter a game starts or not
		 * Once started, the "interval" starts: each second, a block of tetris goes down
		 */
		if (room != null && room.master == player.name) {
			room.game.on = true;
			room.game.start(io, room);
		}
	})

	socket.on('pause', (msg) => {
		/**
		 * THe master can decide to pause the game: suspend the interval
		 */
		if (room != null) {
			if (msg == true) {
				room.game.pause(io, room.name);
			}
			else if (msg == false) {
				room.game.start(io, room);
			}
		}
	})

	
	socket.on('move', (msg) => {
		/**
		 * the client can send the move: rotate, left, right, space(to force the down)
		 */

		if (room != null && player != null && room.game.on == true) {
			player.tetris.apply_move(msg)
			if (msg == "space") {
				room.game.update_players_state(io, room)
			};
			socket.emit("game_state", room.get_state(socket.id));
		}

	})

	socket.on('colors', (msg) => {
		/**
		 * THis is for turning on or off the colors (details) of the spectres shown on the screen
		 */
		if (room != null) {
			room.colors = msg;
			socket.to(room.name).emit("state_ping");
		}
	})

	socket.on('ghost', (msg) => {
		/**
		 * A player can decide wheter he wants to see the shadow, the ghost of its tetris pieces
		 */
		if (room != null && player != null && room.game.on == true) {
			player.tetris.show_ghost = msg;
			socket.emit("game_state", room.get_state(socket.id));
		}

	})

	socket.on('stop', (msg) => {
		/**
		 * Only useful for debug
		 */
		if (room != null && room.game.on == true) {
			room.game.stop(io, room);
		}
	})

	socket.on('restart', (msg) => {
		/**
		 * Once a game is over, the master can decide to restart it
		 */
		if (room != null && room.game.on == false) {
			room.game.restart(io, room);
		}
	})

	socket.on('quit', () => {
		/**
		 * a player can quit the room 
		 */
		if (room != null) {
			disconnect(room, socket);
		}
	});

	socket.on("disconnect", (reason) => {
		/**
		 * this is when a socket has disconnected from our server (by refreshing or quiting the page)
		 */
		if (room != null) {
			disconnect(room, socket);
		}
	  });
});

app.use(express.static("dist"));
var corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req,res) {
  res.sendFile("dist/index.html");
});

server.listen(3000, () => {
  console.log('\nlistening on *:3000');
});


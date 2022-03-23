const { Player } = require("./Player.js")

class Room {
	constructor(name) {
		this.name = name;
		this.players_list = [];
		this.master = null;
	}
  }


class RoomManager {
	constructor() {
		this.global_rooms_list = {};
		this.global_players_list = {};
		this.socket_dict = {};
		}
	
	find_or_create_room(room_name) {
		let room = this.global_rooms_list[room_name];
		if (room == undefined) {
			room = new Room(room_name);
		}
		return room;
	}
	

	player_do_not_exists(name) {
		if (this.global_players_list[name] == undefined) {
			return true;
		}
		return false
	}

	assign_player_to_room(player, room) {
		room.players_list.push(player);
	}

	assign_room_to_player(room, player) {
		player.room_name = room.name;
	}

	assign_master(room, player) {
		room.master = player.name;
		player.master = true;
	}

	add_room_to_list(room) {
		this.global_rooms_list[room.name] = room;
	}

	add_player_to_list(player) {
		this.global_players_list[player.name] = player;
	}

	add_socket_to_list(room, player, chaussette_id) {
		this.socket_dict[chaussette_id] = {'player' : player.name, 'room' : room.name};
	}


	connect_room_player_socket(room, player, chaussette_id) {
		if (room.master == null) {
			this.assign_master(room, player);
		}
		this.assign_player_to_room(player, room);
		this.assign_room_to_player(room, player);

		this.add_room_to_list(room);
		this.add_player_to_list(player);
		this.add_socket_to_list(room, player, chaussette_id);
	}

	
	handle_socket_msg(msg, chaussette_id, io) {
		if (msg.room_name != undefined && msg.player_name != undefined) {
			if (this.player_do_not_exists(msg.player_name)) {
				const room = this.find_or_create_room(msg.room_name);
				const player = new Player(msg.player_name, chaussette_id);
				this.connect_room_player_socket(room, player, chaussette_id);
				io.emit("succes", "player: [" + player.name + "] has joined room: [" + room.name + "]")
			}
			else {
				io.emit("error", "sorry, this player's name is already taken");
			}
		}
	}
}


  module.exports = {Room, RoomManager}

  
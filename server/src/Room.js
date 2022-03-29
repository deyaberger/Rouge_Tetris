const { Player } = require("./Player.js")

class Room {
	constructor(name) {
		this.name = name;
		this.players_list = {};
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
		room.players_list[player.name] = player;
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

	get_other_player_spectres(player, room) {
		let spectres = {}
		if (Object.keys(room.players_list).length > 1) {
			for (var key in room.players_list) {
				if (key != player.name) {
					spectres[key] = room.players_list[key].spectre;
				}
			}
		}
		return (spectres);
	}

	success_msg(player, room) {
		const spectres = this.get_other_player_spectres(player, room);
		const msg = {
			"msg" : `Success in adding player [${player.name}] to room [${room.name}]`,
			"game_on" : false,
			"room_name" : room.name,
			"player_name" : player.name,
			"master" : player.master,
			"room_master" : room.master,
			"tetris" : player.tetris,
			"spectres" : spectres,
		}
		return (msg);
	}

	new_player_msg(player) {
		const msg = {
			"msg" : `player [${player.name}] has joined the room`,
			"new_player" : player.name,
			"spectre" : player.spectre
		}
		return (msg);

	}

	
	handle_socket_msg(msg, chaussette) {
		if (msg.room_name != undefined && msg.player_name != undefined) {
			if (this.player_do_not_exists(msg.player_name)) {
				const room = this.find_or_create_room(msg.room_name);
				const player = new Player(msg.player_name, chaussette.id);
				this.connect_room_player_socket(room, player, chaussette.id);
				chaussette.join(room.name);
				chaussette.emit("success", this.success_msg(player, room))
				chaussette.to(room.name).emit("new_player", this.new_player_msg(player))
			}
			else {
				chaussette.emit("error", "sorry, this player's name is already taken");
			}
		}
	}

	assign_new_master(room) {
		const new_masters_name = Object.keys(room.players_list)[0];
		room.master = new_masters_name;
		room.players_list[new_masters_name].master = true;
	}

	exit_user_msg(room_name, player_name, master_is_leaving) {
		const msg = {
			"msg" : `player ${player_name} has left the room`,
			"master_is_leaving" : master_is_leaving,
			"masters_name" : this.global_rooms_list[room_name].master
		}
		return (msg);
	}

	remove_user(chaussette_id, io) {
		// Need to be better written
		if (this.socket_dict[chaussette_id] != undefined) {
			const player_name = this.socket_dict[chaussette_id]["player"];
			const room_name = this.socket_dict[chaussette_id]["room"];
			let master_is_leaving = false;
			if (player_name != undefined && room_name != undefined) {
				if (player_name == this.global_rooms_list[room_name].master) {
					master_is_leaving = true;
				}
				delete (this.global_rooms_list[room_name].players_list[player_name]);
				delete (this.global_players_list[player_name]);
				if (Object.keys(this.global_rooms_list[room_name].players_list).length === 0) {
					delete (this.global_rooms_list[room_name]);
				}
				else if (master_is_leaving == true) {
					this.assign_new_master(this.global_rooms_list[room_name])
				}
				io.in(room_name).emit("a_player_left", this.exit_user_msg(room_name, player_name, master_is_leaving));
			}
		}
	}
}


  module.exports = {Room, RoomManager}

  
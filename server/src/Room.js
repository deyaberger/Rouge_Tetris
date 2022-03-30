const { Player } = require("./Player.js")

class Room {
	constructor(name) {
		this.name = name;
		this.master = null;
		this.game_on = false;
		this.players_list = {};
	}

	get_other_player_spectres(ID) {
		let spectres = {}
		if (Object.keys(this.players_list).length > 1) {
			for (var key in this.players_list) {
				if (key != ID) {
					spectres[key] = this.players_list[key].spectre; // ! WERE SHOULD IT GO??
				}
			}
		}
		return (spectres);
	}

	get_state(ID) {
		const player = this.players_list[ID];
		const state = {
			"game_on" : this.game_on,
			"room_name" : this.name,
			"player_name" : player.name,
			"master" : this.master,
			"winner" : null,
			"tetris" : player.game.background, // ! TO BE ADDED
			"spectres" : this.get_spectres(ID)
		}
	}
  }


class RoomManager {
	constructor() {
		this.global_rooms_list = {};
		// this.global_players_list = {};
		// this.socket_dict = {};
		}
	
	find_or_create_room(room_name) {
		let room = this.global_rooms_list[room_name];
		if (room == undefined) {
			room = new Room(room_name);
		}
		return room;
	}
	
	player_already_exists(name) {
		for (var key in this.global_rooms_list) {
			if (dictionary.hasOwnProperty(key)) {   
				const player_name = this.global_rooms_list[key]
				if (player_name == name) {
					return true;
				}
			}
		}
		return false;
	}

	is_room_available(room)
	{
		if (room.game_on == false) {
			return true;
		}
		return false;
	}

	assign_master(room, player) {
		room.master = player.name;
	}

	assign_player_to_room(player, room, chaussette_id) {
		room.players_list[chaussette_id] = player;
	}

	add_room_to_list(room) {
		this.global_rooms_list[room.name] = room;
	}


	connect_room_player(room, player, chaussette_id) {
		if (room.master == null) {
			this.assign_master(room, player);
		}
		this.assign_player_to_room(player, room, chaussette_id);
		this.add_room_to_list(room);
	}


	handle_socket_msg(msg, chaussette) {
		if (msg.room_name == undefined || msg.player_name == undefined)
		{
			chaussette.emit("ERROR", "wrong format for join_room msg");
			return;
		}
		if (this.player_already_exists(msg.player_name))
		{
			chaussette.emit("error", "sorry, this player's name is already taken");
			return;
		}
		const room = this.find_or_create_room(msg.room_name);
		if (!this.is_room_available(room))
		{
			chaussette.emit("error", "sorry, this room is not available");
			return;
		}
		const player = new Player(msg.player_name);
		this.connect_room_player(room, player, chaussette.id);
		chaussette.join(room.name); // ! TO BE CONTINUED !!
		// chaussette.emit("success", this.success_msg(player, room)) 
		// chaussette.to(room.name).emit("new_player", this.new_player_msg(player))
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
				delete (this.global_players_list[player_name]); // ! TO BE DELETED
				if (Object.keys(this.global_rooms_list[room_name].players_list).length == 0) {
					delete (this.global_rooms_list[room_name]);
				}
				else if (master_is_leaving == true) {
					this.assign_new_master(this.global_rooms_list[room_name])
				}
				if (this.global_rooms_list[room_name] != undefined)
				{
					io.in(room_name).emit("a_player_left", this.exit_user_msg(room_name, player_name, master_is_leaving));
				}
			}
		}
	}
}


  module.exports = {Room, RoomManager}

  
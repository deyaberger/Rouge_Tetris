const { Player } = require("./Player.js");
const { Game } = require("./Game.js");


class Room {
	constructor(name, difficulty) {
		this.name = name;
		this.master = null;
		this.players_list = {};
		this.game = new Game(this.players_list, difficulty);
		this.colors = false;
	}

	get_other_player_spectres(ID) {
		let spectres = {}
		if (Object.keys(this.players_list).length > 1) {
			for (var key in this.players_list) {
				if (key != ID) {
					if (this.colors == true) {
						spectres[this.players_list[key].name] = this.players_list[key].tetris.get_state();
					}
					else {
						spectres[this.players_list[key].name] = this.players_list[key].tetris.spectre;
					}
				}
			}
		}
		return (spectres);
	}

	get_state(ID) {
		if (ID == null || this.players_list.length == 0) {
			return {};
		}
		const player = this.players_list[ID];
		const state = {
			"game_on" : this.game.on,
			"room_name" : this.name,
			"player_name" : player.name,
			"player_has_lost" : player.lost,
			"rows_about_to_disappear" : player.tetris.rows_to_delete,
			"rows_about_to_be_blocked" : player.tetris.rows_to_block,
			"master" : this.master,
			"winner" : this.game.winner,
			"tetris" : player.tetris.get_state(),
			"spectres" : this.get_other_player_spectres(ID),
			"difficulty" : this.game.difficulty,
		}
		return state;
	}


	remove_player(socket) {
		let master_is_leaving = false;
		if (this.master == this.players_list[socket.id].name) {
			master_is_leaving = true;
		}
		delete (this.players_list[socket.id]);
		if (master_is_leaving == true) {
			const next_key = Object.keys(this.players_list)[0];
			this.master = null;
			if (next_key != undefined) {
				this.master = this.players_list[next_key].name;
			}
		}
		socket.to(this.name).emit("a_player_left", true); 
	}

}



class RoomManager {
	constructor() {
		this.global_rooms_list = {};
		}

	get_state() {
		return (this.global_rooms_list);
	}
	
	find_or_create_room(room_name, difficulty) {
		let room = this.global_rooms_list[room_name];
		if (room == undefined) {
			room = new Room(room_name, difficulty);
		}
		return room;
	}
	
	player_already_exists(name) {
		for (var key in this.global_rooms_list) {
			const room = this.global_rooms_list[key];
			for (var ID in room.players_list) {
				const player = room.players_list[ID];
				if (player != undefined && player.name == name) {
					return true;
				}
			}
		}
		return false;
	}

	is_room_available(room)
	{
		if (room.game.on == false) {
			return true;
		}
		return false;
	}


	connect_room_player(room, player, chaussette) {
		if (room.master == null) {
			room.master = player.name;
		}
		if (chaussette != null) {
			room.players_list[chaussette.id] = player;
		}
		this.global_rooms_list[room.name] = room;
	}


	handle_socket_msg(msg, chaussette) {
		if ((msg.room_name == undefined || msg.player_name == undefined) && chaussette != null)
		{
			chaussette.emit("error", "wrong format for join_room msg");
			return false;
		}
		if (this.player_already_exists(msg.player_name) && chaussette != null)
		{
			chaussette.emit("error", "sorry, this player's name is already taken");
			return false;
		}
		const room = this.find_or_create_room(msg.room_name, msg.difficulty);
		if (!this.is_room_available(room) && chaussette != null) 
		{
			chaussette.emit("error", "sorry, this room is not available");
			return false;
		}
		const player = new Player(msg.player_name, room.game.seed);
		this.connect_room_player(room, player, chaussette);
		if (chaussette != null) {
			chaussette.join(room.name);
			chaussette.emit("game_state", room.get_state(chaussette.id))
			chaussette.to(room.name).emit("new_player", true);
		}
		return room;
	}

	remove_room(name) {
		delete (this.global_rooms_list[name]);
	}
	
}


  module.exports = {Room, RoomManager}

  
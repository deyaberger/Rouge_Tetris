const { Players, Player } = require("./Player.js")

class RoomManager {
	constructor() {
		this.rooms_list = [];
		this.players_list = [];
		this.socket_dict = {};
		}
	
	check_player_name_availability(player_name) {
		let available = true;
		this.players_list.forEach(player => {
			if (player.name == player_name) {
				available = false
			}
		});
		return available;
	}
	// add(room) {
	// 	this.count += 1;
	// 	this.rooms_list.push(room);
	// }

	search_room(room_name) {
		const room = null;
		this.rooms_list.forEach(element => {
			if (element.name == room_name) {
				room = element };
		})
		return room;
	}

	handle_socket_msg(msg, chaussette_id) {
		if (msg.room_name != undefined && msg.player_name != undefined) {
			if (this.check_player_name_availability(msg.player_name)) {
				const room = this.search_room(msg.room_name);
				if (room == null) {
					const room_id = this.rooms_list.length;
					const room = new Room(room_id, msg.room_name);
					const master 
				}
			}
		}
	// 	let room = this.search_room(msg.room_name);
	// 	if (room == null) {
	// 		let room = new Room(msg, this.count, chaussette_id);
	// 		this.add(room);
	// 		chaussette.emit("success", "Room [" + room.name + "] was created with master [" + msg.player_name + "]")
	// 	}
	// 	else {
	// 		const duplicate_player = room.players.already_exists(msg.player_name);
	// 		if (duplicate_player == false) {
	// 			room.players.add_player(msg.player_name);
	// 			chaussette.emit("success", "Player [" + msg.player_name + "] joined Room [" + room.name + "]")
	// 		}
	// 		else if (duplicate_player == true) {
	// 			chaussette.emit("error", "Player's name [" + msg.player_name + "] already exists")
	// 		}
	// 		else {
	// 			chaussette.emit("error", "Rooms's name [" + msg.room_name + "] already exists")
	// 		}
	// 	}
	// }
}

class Room {
	constructor(id, name) {
		this.id = id;
		this.name = name;
		this.players = new Players();
	}
  }


  module.exports = {Room, RoomManager}

  
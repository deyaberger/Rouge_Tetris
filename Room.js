class AllRooms {
	constructor() {
		this.count = 0;
		this.rooms_list = [];
		}
	
	add(room) {
		this.count += 1;
		this.rooms_list.push(room);
	}

	search_room(name) {
		let room = null;
		this.rooms_list.forEach(element => {
			if (element.name == name) {
				room = element };
		})
		return room;
	}
}

class Room {
	constructor(data, id) {
		this.id = id;
		this.name = data.room_name;
		this.master = data.player_name
		this.players = []
	}

  }

function room_manager (msg, all_rooms, io) {
	let room = all_rooms.search_room(msg.room_name);
	if (room == null) {
		console.log("Creating Room [" + msg.room_name + "]");
		let room = new Room(msg, all_rooms.count);
		all_rooms.add(room);
		io.emit("server_msg", room)
	}
	else {
		console.log("Room [" + msg.room_name + "] already exists!")
	}
}

  module.exports = {AllRooms, Room, room_manager}

  
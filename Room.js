class AllRooms {
	constructor() {
		this.count = 0;
		this.rooms_list = [];
		}
	
	add(room) {
		this.count += 1;
		this.rooms_list.push(room);
	}

	exists(name) {
		let exists = false;
		this.rooms_list.forEach(element => {
			if (element.name == name) {
				exists = true };
		})
		return exists;
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

  module.exports = {AllRooms, Room}

  
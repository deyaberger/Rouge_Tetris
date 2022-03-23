class Players {
	constructor() {
		this.list = [];
	}

	already_exists(player_name) {
		let exists = false;
		this.list.forEach(player => {
			if (player.name == player_name) {
				exists = true;
			}
		});
		return exists;
	}

	add_player(player_name) {
		const player = new Player(player_name, this.list.length, false);
		this.list.push(player);
	}
}

class Player {
	constructor(name, id, master, chaussette_id) {
		this.name = name;
		this.id = id;
		this.master = master;
		this.chaussette_id = chaussette_id;
	}
}

module.exports = { Players, Player };
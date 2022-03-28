class Player {
	constructor(name, chaussette_id) {
		this.name = name;
		this.chaussette_id = chaussette_id;
		this.room_name = null;
		this.master = false;
	}
}

module.exports = { Player };
const seedrandom = require('seedrandom');

class Game {
	constructor() {
		this.on = false;
		this.winner = null;
		this.generator = seedrandom(Math.random());
	}

	start(io, room) {
		let i = 0;
		setInterval(function scrolling(io, room)
		{
			if (this.winner != null) {
				return;
			}
			io.in(room).emit("time_pass", true); // ! ADD STATE QUESTION ON CLIENT SIDE

		}, 1000, io, room);
	}
}

module.exports = { Game }
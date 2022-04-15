const { Tetris } = require("./Tetris")


class Player {
	constructor(name, seed) {
		this.name = name;
		this.tetris = new Tetris(seed);
		this.lost = false;
	}
}

module.exports = { Player };
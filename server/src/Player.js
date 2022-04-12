const { Tetris } = require("./Tetris")


class Player {
	constructor(name, generator) {
		this.name = name;
		this.tetris = new Tetris(generator);
		this.lost = false;
	}
}

module.exports = { Player };
const { Tetris } = require("./Tetris")


class Player {
	constructor(name, generator) {
		this.name = name;
		this.tetris = new Tetris(generator);
	}
}

module.exports = { Player };
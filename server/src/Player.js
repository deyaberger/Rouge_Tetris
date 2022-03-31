const { Game } = require("./Game")
class Player {
	constructor(name, generator) {
		this.name = name;
		this.game = new Game(generator);
	}
}

module.exports = { Player };
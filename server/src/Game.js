const seedrandom = require('seedrandom');

class Game {
	constructor(players_list) {
		this.on = false;
		this.winner = null;
		this.generator = seedrandom(Math.random());
		this.players_list = players_list;
	}

	print_state(tetris) {
		let state = tetris.get_state();
		for (let i = 0; i < tetris.max_row; i++) {
			console.log(`\t${state[i]}`);
		}
	}

	update_players_state() {
		for (const player_id in this.players_list) {
			if (Object.hasOwnProperty.call(this.players_list, player_id)) {
				// try {
					const tetris = this.players_list[player_id].tetris;
					console.log(`***************\n\n`)
					tetris.apply_move("down");
					this.print_state(tetris);
				//   }
				//   catch (error) {
					// console.log(`error: ${error}`);
				//   }
			}
		}
	}

	scrolling (io, room) {
		this.update_players_state();
		io.in(room).emit("time_pass", true); // ! ADD STATE QUESTION ON CLIENT SIDE
	}

	start(io, room) {
		let i = 0;
		this.on = true;
		this.interval = setInterval(() => this.scrolling(io, room), 1000);
		// this.interval = this.scrolling(io, room);
	}

	stop() {
		this.on = false;
		clearInterval(this.interval);
	}

}

module.exports = { Game }
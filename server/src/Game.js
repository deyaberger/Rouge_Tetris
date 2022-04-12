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


	update_players_state (io, room) {
		let active_player = false;
		for (const player_id in this.players_list) {
			if (Object.hasOwnProperty.call(this.players_list, player_id)) {
				const player = this.players_list[player_id];
				if (player.lost != true){
					active_player = true;
					const tetris = this.players_list[player_id].tetris;
					if (tetris.apply_move("time") == false) {
						this.players_list[player_id].lost = true;
					}
					this.print_state(tetris);
					io.to(player_id).emit("game_state", room.get_state(player_id));
				}
			}
		}
		if (active_player == false) {
			console.log("END OF GAME");
			this.stop();
		}
	}

	start(io, room) {
		this.on = true;
		this.interval = setInterval(() => this.update_players_state(io, room), 1000);
	}

	stop() {
		this.on = false;
		clearInterval(this.interval);
	}

}

module.exports = { Game }
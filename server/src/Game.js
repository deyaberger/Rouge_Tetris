const seedrandom = require('seedrandom');
const { Tetris } = require("./Tetris")


class Game {
	constructor(players_list) {
		this.on = false;
		this.winner = null;
		this.seed = Math.random();
		this.players_list = players_list;
		this.winner_pause = false;
		this.interval = null;
		// this.show_ghost = false;
	}

	// print_state(tetris) {
	// 	let state = tetris.get_state();
	// 	for (let i = 0; i < tetris.max_row; i++) {
	// 		for (let j = 0; j < tetris.max_col; j++) {
	// 			if (state[i][j] != 0 && state[i][j] != -1) {
	// 				process.stdout.write(`\x1b[33m ${state[i][j]} \x1b[0m`);
	// 			}
	// 			else if (state[i][j] == -1) {
	// 				process.stdout.write(`\x1b[37m${state[i][j]} \x1b[0m`);
	// 			}
	// 			else {
	// 				process.stdout.write(` ${state[i][j]} `);
	// 			}
	// 		}
	// 		console.log("");
	// 	}
	// }

	block_other_players_rows(who_did_zat, nb_rows) {
		for (const player_id in this.players_list) {
			if (Object.hasOwnProperty.call(this.players_list, player_id)) {
				if (player_id != who_did_zat) {
					const tetris = this.players_list[player_id].tetris;
					for (let i = 0; i < nb_rows; i++) {
						tetris.block();
					}
				}
			}
		}
	}


	update_players_state (io, room, testing) {
		let active_player_nb = 0;
		let active_player_id = null;
		console.log("***********")
		for (const player_id in this.players_list) {
			if (Object.hasOwnProperty.call(this.players_list, player_id)) {
				const player = this.players_list[player_id];
				if (player.lost != true){
					active_player_nb += 1;
					active_player_id = player_id;
					const tetris = this.players_list[player_id].tetris;
					tetris.clean();
					if (tetris.apply_move("time") == false) {
						this.players_list[player_id].lost = true;
					}
					if (tetris.rows_to_delete.length != 0) {
						this.block_other_players_rows(player_id, tetris.rows_to_delete.length);
					}
					if (testing != true) {
						io.to(player_id).emit("game_state", room.get_state(player_id));
					}
				}
			}
		}
		if (active_player_id != null && active_player_nb == 1) {
			if (Object.keys(this.players_list).length > 1 && this.winner_pause == false) {
				this.pause();
				this.winner_pause = true;
				io.to(active_player_id).emit("winner", room.get_state(active_player_id)); // ! TO BE HANDLED ON CLIENT SIDE !!
			} 
			this.winner = this.players_list[active_player_id].name;
		}
		if (active_player_nb == 0) {
			console.log("END OF GAME");
			this.stop(io, room);
		}
	}

	start(io, room) {
		this.on = true;
		this.interval = setInterval(() => this.update_players_state(io, room), 1000);
	}

	stop(io, room) {
		this.on = false;
		clearInterval(this.interval);
		for (const player_id in this.players_list) {
			if (Object.hasOwnProperty.call(this.players_list, player_id)) {
				io.to(room.name).emit("game_state", room.get_state(player_id));
			}
		}
	}

	restart(io, room) {
		this.seed = Math.random();
		for (const player_id in this.players_list) {
			if (Object.hasOwnProperty.call(this.players_list, player_id)) {
				const player = this.players_list[player_id];
				player.lost = false;
				player.tetris = new Tetris(this.seed);
			}
		}
		this.start(io, room);
	}

	pause() {
		this.on = false;
		clearInterval(this.interval);
		this.interval = null;
	}

}

module.exports = { Game }
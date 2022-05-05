const { Tetris } = require("./Tetris")


class Game {
	constructor(players_list) {
		this.on = false;
		this.winner = null;
		this.seed = Math.random();
		this.players_list = players_list;
	}

	print_state(tetris) {
		let state = tetris.get_state();
		for (let i = 0; i < tetris.max_row; i++) {
			for (let j = 0; j < tetris.max_col; j++) {
				if (state[i][j] != 0 && state[i][j] != -1) {
					process.stdout.write(`\x1b[33m ${state[i][j]} \x1b[0m`);
				}
				else if (state[i][j] == -1) {
					process.stdout.write(`\x1b[37m${state[i][j]} \x1b[0m`);
				}
				else {
					process.stdout.write(` ${state[i][j]} `);
				}
			}
			console.log("");
		}
	}

	block_other_players_rows(rows_to_block, who_did_zat) {
		for (const player_id in this.players_list) {
			if (Object.hasOwnProperty.call(this.players_list, player_id)) {
				if (player_id != who_did_zat) {
					const tetris = this.players_list[player_id].tetris;
					tetris.block(rows_to_block);
				}
			}
		}
	}



	update_players_state (io, room, testing) {
		let active_player_nb = 0;
		let active_player_id = null;
		console.log("***********")
		for (const player_id in this.players_list) {
			console.log(`player id  ` + player_id)
			if (Object.hasOwnProperty.call(this.players_list, player_id)) {
				const player = this.players_list[player_id];
				if (player.lost != true){
					active_player_nb += 1;
					console.log(`active_player_nb  ` + active_player_nb)
					active_player_id = player_id;
					const tetris = this.players_list[player_id].tetris;
					tetris.clean();
					if (tetris.apply_move("time") == false) {
						console.log("on la mis a true");
						this.players_list[player_id].lost = true;
					}
					if (tetris.rows_to_delete.length != 0) {
						this.block_other_players_rows(tetris.rows_to_delete, player_id);
					}
					// this.print_state(tetris);
					if (testing != true) {
						io.to(player_id).emit("game_state", room.get_state(player_id));
					}
				}
			}
		}
		if (active_player_id != null && active_player_nb == 1) {
			this.winner = this.players_list[active_player_id].name;
		}
		if (active_player_nb == 0) {
			console.log("END OF GAME");
			this.stop();
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
		this.generator = seedrandom(Math.random());
		for (const player_id in this.players_list) {
			if (Object.hasOwnProperty.call(this.players_list, player_id)) {
				const player = this.players_list[player_id];
				player.lost = false;
				player.tetris = new Tetris(this.generator);
			}
		}
		this.start(io, room);
	}

}

module.exports = { Game }
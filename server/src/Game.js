const seedrandom = require('seedrandom');
const { Tetris } = require("./Tetris")

const MEDIUM = 2
const HARD = 3

class Game {
	constructor(players_list, difficulty) {
		this.on = false;
		this.winner = null;
		this.seed = Math.random();
		this.players_list = players_list;
		this.winner_pause = false;
		this.interval = null;
		this.difficulty = difficulty;
	}

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

	check_winner(io, room, active_player_id, active_player_nb) {
		if (active_player_id != null && active_player_nb == 1) {
			if (Object.keys(this.players_list).length > 1 && this.winner_pause == false) {
				this.pause();
				this.winner_pause = true;
				if (io != null) {
					io.to(room.name).emit("game_state", room.get_state(active_player_id));
					io.to(active_player_id).emit("winner", room.get_state(active_player_id)); // ! TO BE HANDLED ON CLIENT SIDE !!
				}
			}
			this.winner = this.players_list[active_player_id].name;
		}
		console.log("active_player_nb")
		console.log(active_player_nb)
		if (active_player_nb == 0) {
			console.log("END OF GAME for real");
			this.stop(io, room);
		}
	}


	update_players_state (io, room) {
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
					if (io != null) {
						io.to(player_id).emit("game_state", room.get_state(player_id));
					}
				}
			}
		}
		this.check_winner(io, room, active_player_id, active_player_nb);
	}

	start(io, room) {
		this.on = true;
		let time_to_wait = 1000
		if (this.difficulty == MEDIUM) {
			time_to_wait = 500
		}
		else if (this.difficulty == HARD) {
			time_to_wait = 200
		}
		this.interval = setInterval(() => this.update_players_state(io, room), time_to_wait);
	}

	stop(io, room) {
		this.on = false;
		clearInterval(this.interval);
		this.interval = null;
		for (const player_id in this.players_list) {
			if (Object.hasOwnProperty.call(this.players_list, player_id)) {
				if (io != null) {
					io.to(room.name).emit("game_state", room.get_state(player_id));
				}
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
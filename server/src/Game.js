const seedrandom = require('seedrandom');
const { Tetris } = require("./Tetris")

const MEDIUM = 2
const HARD = 3

class Game {
	constructor(players_list, difficulty) {
		this.on = false;
		this.paused = false;
		this.winner = null;
		this.seed = Math.random();
		this.players_list = players_list;
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
			if (Object.keys(this.players_list).length > 1) {
				// this.pause(io, room.name);
				this.winner = this.players_list[active_player_id].name;
				if (io != null) {
					this.stop(io, room)
				}
			}
			this.winner = this.players_list[active_player_id].name;
		}
		if (active_player_nb == 0) {
			this.stop(io, room);
		}
	}


	update_players_state (io, room) {
		let active_player_nb = 0;
		let active_player_id = null;
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
						io.to(player_id).emit("game_state", room.get_state(player_id));
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
		this.paused = false;
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
					io.to(room.name).emit("state_ping");
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

	pause(io, room_name) {
		this.paused = true;
		clearInterval(this.interval);
		this.interval = null;
		io.to(room_name).emit("state_ping");
	}

}

module.exports = { Game }
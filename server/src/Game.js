var { row, col, create_2d_array } = require("./utils")

class Game {
	constructor(generator) {
		this.generator = generator;
		this.background = create_2d_array(row, col);
		this.active_piece = null;
		this.piece_position = null;
		this.spectre = create_2d_array(row, col);
	}
	
	get_tetris() {
		return;
	}

	create_random_piece() {
		return;
	}

	does_it_fit(piece, piece_position) {
		return;
	}

	add_to_backgound(piece, piece_position) {
		return;
	}

	is_done(piece, piece_position) {

	}
}
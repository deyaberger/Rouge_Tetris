const { Piece } = require("./Piece");
var { row, col, create_2d_array } = require("./utils")

class Tetris {
	constructor(generator) {
		this.generator = generator;
		this.background = create_2d_array(row, col);
		this.active_piece = null;
		this.piece_position = null;
		this.spectre = create_2d_array(row, col);
	}

	get_state() {
		// ! TO BE MODIFIED
		console.log("WARNING: this function returns an empty array")
		return this.background;
	}

	create_random_piece() {
		return;
	}

	does_it_fit(piece, piece_position) {
		let row = piece_position[0];
		let col = piece_position[1];
		for (let i = 0; i < piece.size[0]; i++) {
			for (let j = 0; j < piece.size[1]; j++) {
				const value = piece.x[i][j];
				if (value != 0 && row >= 0) {
					if (this.background[row][col] != 0) {
						console.log("already occupied")
						return false;
					}
				}
				col += 1;
			};
			col = piece_position[1];
			row += 1;
		}
		return true;
	}

	add_to_backgound(piece, piece_position) {
		return;
	}

	is_done(piece, piece_position) {

	}

	generate_new_piece() {
		const piece_nb = Math.round(generator() * 10) + 1;
		const rotation = 0;
		const piece = new Piece(piece_nb, rotation);
		const piece_position = [-1, 3];
		if (!this.does_it_fit(piece, piece_position)){
			console.log("Can't fit new piece: " + piece_nb);
		}
		console.log("tetris nb: " + Math.round(generator() * 10) + 1 + ", rotation: " + Math.round(generator() * 10) % 4 + ", position: (" + Math.round(generator() * 10) + ",  " + Math.round(generator() * 10) + ")");
	}

	apply_move(type) {
		if (this.active_piece == null) {
			this.generate_new_piece();
		}
	}
}

module.exports = { Tetris }
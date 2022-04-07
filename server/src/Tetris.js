const { Piece } = require("./Piece");
var { max_row, max_col, create_2d_array } = require("./utils")

class Tetris {
	constructor(generator) {
		this.generator = generator;
		this.background = create_2d_array(max_row, max_col);
		this.active_piece = null;
		this.piece_position = null;
		this.spectre = create_2d_array(max_row, max_col);
	}

	get_state() {
		const state = create_2d_array(max_row, max_col);
		for (let i = 0; i < max_row; i++) {
			for (let j = 0; j < max_col; j++) {
				state[i][j] = this.background[i][j];
			}
			const element = array[i];
			
		}
		// ! TO BE MODIFIED!
		return this.background;
	}


	is_inside(row, col) {
		if (col < 0 || col >= max_col || row >= max_row) {
			return false;
		}
		return true;
	}

	
	does_it_fit(piece, piece_position) {
		let row = piece_position[0];
		let col = piece_position[1];
		for (let i = 0; i < piece.size[0]; i++) {
			for (let j = 0; j < piece.size[1]; j++) {
				const value = piece.x[i][j];
				if(is_inside(row, col)) {
					if (this.background[row][col] != 0) {
						console.log("already occupied")
						return false;
					}
				}
				else if (value != 0) {
						return false;
				}
				col += 1;
			};
			col = piece_position[1];
			row += 1;
		}
		return true;
	}

	add_to_backgound(piece, piece_position) {
		let row = piece_position[0];
		let col = piece_position[1];
		for (let i = 0; i < piece.size[0]; i++) {
			for (let j = 0; j < piece.size[1]; j++) {
				if (row > 0) {
					this.background[row][col] = piece.x[i][j];
				}
			}
		}
		return;
	}

	is_it_stuck(piece, piece_position) {
		const new_position = this.piece_position[0] + 1;
		if (this.does_it_fit(this.active_piece, new_position)) {
			return false;
		}
		return true;
	}

	generate_new_piece() {
		const piece_nb = Math.round(generator() * 10) + 1;
		const rotation = 0;
		const piece = new Piece(piece_nb, rotation);
		const piece_position = [-1, 3];
		if (!this.does_it_fit(piece, piece_position)){
			console.log("Can't fit new piece: --> END OF GAME");
			return false;
		}
		this.active_piece = piece;
		this.piece_position = piece_position;
		return true;
	}

	apply_move(move) {
		if (this.active_piece == null) {
			this.generate_new_piece();
		}
		const new_position = null;
		if (move == "down") {
			new_position = this.piece_position[0] + 1;
		}
		else if (move == "left") {
			new_position = this.piece_position[1] - 1;
		}
		else if (move == "right") {
			new_position = this.piece_position[1] + 1;
		}
		else if (move == "rotate") {
			new_piece = new Piece(this.active_piece.piece_nb, (this.active_piece.rotation + 1) % 3);
		}
		if (this.does_it_fit(new_piece, new_position))
		{
			this.active_piece = new_piece;
			this.active_piece = new_position;
		}
		if (is_it_stuck(this.active_piece, this.piece_position)) {
			this.add_to_backgound();
			this.active_piece == null;
			this.piece_position = null;
		}

	}
}

module.exports = { Tetris }
let { Piece } = require("./Piece");
var {create_2d_array, copy_array} = require("./utils")

class Tetris {
	constructor(generator) {
		this.max_row = 20;
		this.max_col = 10;
		this.generator = generator;
		this.background = create_2d_array(this.max_row, this.max_col);
		this.active_piece = null;
		this.piece_position = null;
		this.spectre = create_2d_array(this.max_row, this.max_col);
		this.rows_to_delete = [];
		this.rows_to_block = [];
	}

	full_clean() {
		this.background = create_2d_array(this.max_row, this.max_col);
		this.active_piece = null;
		this.piece_position = null;
		this.spectre = create_2d_array(this.max_row, this.max_col);
		this.rows_to_delete = [];
		this.rows_to_block = [];
	}

	clean() {
		this.rows_to_delete = [];
		this.rows_to_block = [];
	}

	update_spectre() {
		for (let j = 0; j < this.max_col; j++) {
			let quickest_touch = false;
			for (let i = 0; i < this.max_row; i++) {
				if (this.background[i][j] != 0 || quickest_touch == true) {
					quickest_touch = true;
					this.spectre[i][j] = 1;
				}
			}
		}
	}

	is_outside_up(row, col) {
		if (row < 0) {
			return true;
		}
		return false;
	}

	is_outside_sides(row, col) {
		if (col < 0 || col >= this.max_col || row >= this.max_row) {
			return true;
		}
		return false;
	}

	does_it_fit(piece, piece_position) {
		if (piece == null || piece_position == null) {
			console.log("missing pieces");
			return false;
		}
		for (let i = 0; i < piece.size[0]; i++) {
			for (let j = 0; j < piece.size[1]; j++) {
				let piece_value = piece.x[i][j];
				if (piece_value == 0) {
					continue;
				}
				else if (this.is_outside_up(piece_position[0] + i, piece_position[1] + j)) {
					continue;
				}
				else if (this.is_outside_sides(piece_position[0] + i, piece_position[1] + j)) {
					return false;
				}
				let background_value = this.background[piece_position[0] + i][piece_position[1] + j];
				if (piece_value != 0 && background_value != 0) {
					// console.log("occupied");
					return false;
				}
			}			
		}
		return true;
	}


	add_piece_to_array(array, piece, position) {
		for (let i = 0; i < piece.size[0]; i++) {
			for (let j = 0; j < piece.size[1]; j++) {
				let piece_value = piece.x[i][j];
				// console.log(`piece value = ${piece_value}\npos[0] = ${position[0]}, pos[1] = ${position[1]}\ni = ${i}, j = ${j}`);
				if (position[0] + i >= 0 && piece_value != 0) {
					array[position[0] + i][position[1] + j] = piece_value;
				}
			}
		}
	}

	check_full_rows() {
		for (let i = 0; i < this.active_piece.size[0]; i++) {
			for (let j = 0; j < this.active_piece.size[1]; j++) {
				let holes_in_line = false;
				let piece_value = this.active_piece.x[i][j];
				if (this.piece_position[0] + i >= 0 && this.piece_position[0] + 1 < this.max_row && piece_value != 0 && piece_value != -1) {
					for (let k = 0; k < this.max_col; k++) {
						let BK = this.background[this.piece_position[0] + i][k];
						if (BK == 0 || BK == -1) {
							holes_in_line = true;
							break;
						}
					}
					if (holes_in_line == false) {
						this.rows_to_delete.push(this.piece_position[0] + i);
						break;
					}
				}
			}
		}
	}


	block(rows_to_block) {
		this.rows_to_block = rows_to_block;
		for (let index = 0; index < this.rows_to_block.length; index++) {
			const row = this.rows_to_block[index];
			for (let j = 0; j < this.max_col; j++) {
				this.background[row][j] = -1;
			}
			
		}
		console.log("BLOCKING ROWS TO BE HANDLED");
	}

	delete_row() {
		let length = this.rows_to_delete.length - 1;
		let full = length;
		let new_background = create_2d_array(this.max_row, this.max_col);
		for (let i = this.max_row - 1; i >= 0; i--) {
			if (i >= 0 && i != this.rows_to_delete[full]) {
				for (let j = 0; j < this.max_col; j++) {
					new_background[i + length - full][j] = this.background[i][j];
				}					
			}
			if (full >= 0 && i == this.rows_to_delete[full]) {
				full--;
			}
		}
		this.background = new_background;
	}

	add_to_backgound() {
		this.add_piece_to_array(this.background, this.active_piece, this.piece_position);
		this.check_full_rows();
		if (this.rows_to_delete != [])
		{
			this.delete_row();
		}
	}


	get_state() {
		let state = copy_array(this.background, this.max_row, this.max_col);
		if (this.active_piece != null) {
			this.add_piece_to_array(state, this.active_piece, this.piece_position);
		}
		return state;
	}


	generate_new_piece() {
		let piece_nb = (Math.round(this.generator() * 10) % 6) + 1;
		if (piece_nb < 1 || piece_nb > 7) {console.log(`--------------------------ERROR: piece_nb = ${piece_nb}`)};
		let rotation_nb = 0;
		let piece = new Piece(piece_nb, rotation_nb);
		let piece_position = [-1, 3]; 
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
			console.log("* Should Only Print Once * Generating first piece")
			if (this.generate_new_piece() == false) {
				return false;
			}
			return true;
		}
		else {
			// console.log(`applying move ${move}`);
			let new_position = this.piece_position;
			let new_piece = new Piece(this.active_piece.piece_nb, this.active_piece.rotation_nb);
			if (move == "down" || move == "time") {
				new_position = [this.piece_position[0] + 1, this.piece_position[1]];
			}
			else if (move == "left") {
				new_position = [this.piece_position[0], this.piece_position[1] - 1];
			}
			else if (move == "right") {
				new_position = [this.piece_position[0], this.piece_position[1] + 1];
			}
			else if (move == "rotate") {
				new_piece.rotate(1);
			}
			else if (move == "space") {
				console.log("NOT HANDLED YET");
			}
			let result = this.does_it_fit(new_piece, new_position);
			if (result == true)
			{
				this.active_piece = new_piece;
				this.piece_position = new_position;
				return true;
			}		
			else if (result == false && move == "time") {
				this.add_to_backgound();
				this.update_spectre();
				if (this.generate_new_piece() == false) {
					return false;
				}
			}
			return false;
		}
	}
}

module.exports = { Tetris }
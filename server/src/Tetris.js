const seedrandom = require('seedrandom');
let { Piece } = require("./Piece");
var {create_2d_array, copy_array} = require("./utils");

class Tetris {
	constructor(seed) {
		this.max_row = 20;
		this.max_col = 10;
		this.generator = seedrandom(seed);
		this.background = create_2d_array(this.max_row, this.max_col);
		this.active_piece = null;
		this.piece_position = null;
		this.spectre = create_2d_array(this.max_row, this.max_col);
		this.rows_to_delete = [];
		this.rows_to_block = 0;
		this.spectre_limit = [20,20,20,20,20,20,20,20,20,20];
		this.ghost_piece = null;
	}

	full_clean() {
		this.background = create_2d_array(this.max_row, this.max_col);
		this.active_piece = null;
		this.piece_position = null;
		this.spectre = create_2d_array(this.max_row, this.max_col);
		this.rows_to_delete = [];
		this.rows_to_block = 0;
	}

	clean() {
		this.rows_to_delete = [];
	}

	update_spectre() {
		for (let j = 0; j < this.max_col; j++) {
			let quickest_touch = false;
			for (let i = 0; i < this.max_row; i++) {
				if (this.background[i][j] != 0 && quickest_touch == false) {
					this.spectre_limit[j] = i;
				}
				if (this.background[i][j] != 0 || quickest_touch == true) {
					quickest_touch = true;
					this.spectre[i][j] = 1;
				}
				else {
					this.spectre[i][j] = 0;
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
				else if (this.is_outside_up(piece_position[0] + i, piece_position[1] + j)
						&& !this.is_outside_sides(piece_position[0] + i, piece_position[1] + j)) {
					continue;
				}
				else if (this.is_outside_sides(piece_position[0] + i, piece_position[1] + j)) {
					return false;
				}
				let background_value = this.background[piece_position[0] + i][piece_position[1] + j];
				if (piece_value != 0 && background_value != 0) {
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
					if (piece_value == -1 && array[position[0] + i][position[1] + j] != 0) { // ! TO BE CHANGED TO -2
						continue;
					}
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


	block() {
		this.rows_to_block += 1;
		for (let row = this.max_row - this.rows_to_block; row < this.max_row; row++) {
			for (let j = 0; j < this.max_col; j++) {
				this.background[row][j] = -1;
			}
		}
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

	get_highest_hit(piece, piece_position) {
		var start = piece_position[1] >= 0 ? piece_position[1] : 0;
		var end = 0 + piece_position[1] + piece.size[0];
		var sliced = this.spectre_limit.slice(start, end);
		var highest_hit = Math.min.apply(Math, sliced);
		return highest_hit;
	}

	create_ghost(piece, new_position) {
		this.ghost_position = new_position;
		this.ghost_piece = new Piece(piece.piece_nb, piece.rotation_nb);
		this.ghost_piece.replace_values(-1); // ! TO BE CHANGED TO -2
	}

	get_ghost(piece, piece_position) {
		let highest_hit = this.get_highest_hit(piece, piece_position);
		for (let i = highest_hit; i > 0; i--) {
			var new_position = [i, piece_position[1]]
			if (this.does_it_fit(piece, new_position) == true) {
				if (i == highest_hit) {
					for (let k = i + 1; k < this.max_row; k++) {
						var new_position_bis = [k, piece_position[1]]
						if (this.does_it_fit(piece, new_position_bis) == true) {
							new_position = new_position_bis;
						}
						else {
							break;
						}
					}
				}
				this.create_ghost(piece, new_position);
				return true;
			}
		}
		return false;
	}

	get_state() {
		let state = copy_array(this.background, this.max_row, this.max_col);
		if (this.active_piece != null) {
			this.get_ghost(this.active_piece, this.piece_position);
			this.add_piece_to_array(state, this.active_piece, this.piece_position);
			if (this.ghost_piece != null && this.ghost_position != this.piece_position) {
				this.add_piece_to_array(state, this.ghost_piece, this.ghost_position);
			}
		}
		return state;
	}


	generate_new_piece() {
		let piece_nb = (Math.round(this.generator() * 10) % 6) + 1;
		// let piece_nb = 4;
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
		this.get_ghost(this.active_piece, this.piece_position);
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
				new_position = [this.ghost_position[0], this.ghost_position[1]];
				console.log("NOT HANDLED YET");
			}
			let result = this.does_it_fit(new_piece, new_position);
			if (result == true)
			{
				this.active_piece = new_piece;
				this.piece_position = new_position;
				// this.check_full_rows();
				return true;
			}		
			else if (result == false && move == "time") {
				this.add_to_backgound();
				this.update_spectre();
				if (this.generate_new_piece() == false) {
					return false;
				}
			}
			return true;
		}
	}
}

module.exports = { Tetris }
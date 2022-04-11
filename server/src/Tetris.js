let { Piece } = require("./Piece");
var {create_2d_array} = require("./utils")

class Tetris {
	constructor(generator) {
		this.max_row = 20;
		this.max_col = 10;
		this.generator = generator;
		this.background = create_2d_array(this.max_row, this.max_col);
		this.active_piece = null;
		this.piece_position = null;
		this.spectre = create_2d_array(this.max_row, this.max_col);
	}

	get_state() {
		if (this.active_piece == null || this.piece_position == null) {
			return this.background;
		}
		let k = this.piece_position[0] == -1 ? 0 : this.piece_position[0];
		let p = this.piece_position[1];
		let row = this.piece_position[0] == -1 ? 1 : 0;
		let col = 0;
		let state = create_2d_array(this.max_row, this.max_col);
		for (let i = 0; i < this.max_row; i++) {
			for (let j = 0; j < this.max_col; j++) {
				state[i][j] = this.background[i][j];
				if ((this.active_piece != null)
				&& (i == k && j == p)
				&& (k < this.piece_position[0] + this.active_piece.size[0])
				&& (p < this.piece_position[1] + this.active_piece.size[1])) {
					state[i][j] = this.active_piece.x[row][col];
					col += 1;
					p++;
				}
			}
			if (col > 0) {
				col = 0;
				row += 1;
				k++;
				p = this.piece_position[1];
			}
		}
		return state;
	}


	is_inside(row, col) {
		if (col < 0 || col >= this.max_col || row >= this.max_row) {
			return false;
		}
		return true;
	}

	
	does_it_fit(piece, piece_position) {
		let row = piece_position[0];
		let col = piece_position[1];
		for (let i = 0; i < piece.size[0]; i++) {
			for (let j = 0; j < piece.size[1]; j++) {
				let value = piece.x[i][j];
				if(this.is_inside(row, col)) {
					if (value != 0 && row > 0 && this.background[row][col] != 0) {
						console.log("already occupied")
						return false;
					}
				}
				else if (value != 0) {
					console.log("outside")
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
				if (row >= 0 && row < this.max_row) {
					if (piece.x[i][j] != 0) {
						this.background[row][col] = piece.x[i][j];
					}
					col++;
				}
			}
			col = piece_position[1];
			row++;
		}
		return;
	}

	is_it_stuck(piece, piece_position) {
		let new_position = [this.piece_position[0] + 1, this.piece_position[1]];
		if (this.does_it_fit(piece, new_position)) {
			return false;
		}
		console.log("YES IT IS STUCK")
		return true;
	}

	generate_new_piece() {
		let piece_nb = (Math.round(this.generator() * 10) % 6) + 1;
		if (piece_nb < 1 || piece_nb > 7) {console.log(`--------------------------ERROR: piece_nb = ${piece_nb}`)}
		let rotation = 0;
		let piece = new Piece(piece_nb, rotation);
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
			console.log("GENERating new piece")
			this.generate_new_piece();
		}
		else {
			let new_position = this.piece_position;
			let new_piece = new Piece(this.active_piece.piece_nb, this.active_piece.rotation);
			if (move == "down") {
				new_position = [this.piece_position[0] + 1, this.piece_position[1]];
			}
			else if (move == "left") {
				new_position = [this.piece_position[0], this.piece_position[1] - 1];
			}
			else if (move == "right") {
				new_position = [this.piece_position[0], this.piece_position[1] + 1];
			}
			else if (move == "rotate") {
				new_piece.single_rotation();
			}
			if (this.does_it_fit(new_piece, new_position))
			{
				this.active_piece = new_piece;
				this.piece_position = new_position;
			}
		}
		if (this.is_it_stuck(this.active_piece, this.piece_position)) {
			this.add_to_backgound(this.active_piece, this.piece_position);
			console.log("adding to background and setting all to null")
			this.active_piece = null;
			this.piece_position = null;
		}

	}
}

module.exports = { Tetris }
// ! {
// ! 	"blocked" 	: -1,
// ! 	"empty" 	: 0,
// ! 	"turquoise" : 1,
// ! 	"blue" 		: 2,
// ! 	"orange" 	: 3,
// ! 	"yellow" 	: 4,
// ! 	"green" 	: 5,
// ! 	"purple" 	: 6,
// ! 	"red" 		: 7
// ! }

var { create_2d_array } = require("./utils")


class Piece {
	constructor(piece_nb, rotation) {
		const three_matrix = [
			[(2, 0), (1, 0), (0, 0)],
			[(2, 1), (1, 1), (0, 1)],
			[(2, 2), (1, 2), (0, 2)]
		];
		const four_matrix = [
			[(3, 0), (2, 0), (1, 0), (0, 0)],
			[(3, 1), (2, 1), (1, 1), (0, 1)],
			[(3, 2), (2, 2), (1, 2), (0, 2)],
			[(3, 3), (2, 3), (1, 3), (0, 3)]
		] 
		this.piece_nb = piece_nb;
		this.size = (3, 3);
		this.rotation_matrix = three_matrix;
		if (piece_nb == 1 || piece_nb == 4) {
			this.size = (4, 4);
			this.rotation_matrix = four_matrix;
		}
		this.x = null;
		if (piece_nb == 1) {
			this.x = this.turquoise(1);
		}
		else if (piece_nb == 2) {
			this.x = this.blue(2);
		}
		else if (piece_nb == 3) {
			this.x = this.orange(3);
		}
		else if (piece_nb == 4) {
			this.x = this.yellow(4);
		}
		else if (piece_nb == 5) {
			this.x = this.green(5);
		}
		else if (piece_nb == 6) {
			this.x = this.purple(6);
		}
		else if (piece_nb == 7) {
			this.x = this.red(7);
		}
		this.x.rotate(rotation);
	}

	rotate(rotation) {
		if (this.piece_nb == 4) {
			return;
		}
		const new_x = create_2d_array(this.size[0], this.size[1])
		for (let i = 0; i < _.range(this.size[0]); i++) {
			for (let j = 0; j < _.range(this.size[1]); j++) {
				var value = this.x[i][j];
				var {k, l} = this.rotation_matrix[i][j];
				new_x[k][l] = value;
			}
		}


	}

	turquoise(v) {
		const x = [   
			[0, 0, 0, 0],
			[v, v, v, v],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		]
	}

	blue(v) {
		const x = [
			[v, 0, 0]
			[v, v, v]
			[0, 0, 0]
		]
	}

	orange(v) {
		const x = [
			[0, 0, v]
			[v, v, v]
			[0, 0, 0]
		]
	}

	yellow(v) {
		const x = [   
			[0, v, v, 0]
			[0, v, v, 0]
			[0, 0, 0, 0]
			[0, 0, 0, 0]
		]
	}

	green(v) {
		const x = [   
			[0, v, v]
			[v, v, 0]
			[0, 0, 0]
		]
	}

	purple(v) {
		const x = [
			[0, v, 0]
			[v, v, v]
			[0, 0, 0]
		]
	}

	red(v) {
		const x = [   
			[v, v, 0]
			[0, v, v]
			[0, 0, 0]
		]
	}


}
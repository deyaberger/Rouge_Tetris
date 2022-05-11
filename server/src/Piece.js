// ! {
// ! 	"blocked" 	: -1,

// ! 	"empty" 	: 0,

// ! 	"turquoise" : 1  [v v v v]

// ! 	"blue" 		: 2  [v . .]
// !					 [v v v]

// ! 	"orange" 	: 3  [. . v]
// !					 [v v v]

// ! 	"yellow" 	: 4  [v v]
// !					 [v v]

// ! 	"green" 	: 5  [  v v]
// !					 [v v  ]

// ! 	"purple" 	: 6  [  v  ]
// !					 [v v v]

// ! 	"red" 		: 7  [v v  ]
// !					 [  v v]
// ! }

var { create_2d_array } = require("./utils")

let three_matrix = [
	[[0, 2], [1, 2], [2, 2]],
	[[0, 1], [1, 1], [2, 1]],
	[[0, 0], [1, 0], [2, 0]]
];
let four_matrix = [
	[[0, 3], [1, 3], [2, 3], [3, 3]],
	[[0, 2], [1, 2], [2, 2], [3, 2]],
	[[0, 1], [1, 1], [2, 1], [3, 1]],
	[[0, 0], [1, 0], [2, 0], [3, 0]]
] 

class Piece {
	constructor(piece_nb, rotations) {
		this.piece_nb = piece_nb;
		this.rotation_nb = 0;
		this.size = [3, 3];
		this.rotation_matrix = three_matrix;
		if (piece_nb == 1 || piece_nb == 4) {
			this.size = [4, 4];
			this.rotation_matrix = four_matrix;
		}
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
		this.rotate(rotations);
	}

	rotate(rotations) {
		if (this.piece_nb == 4) {
			return;
		}
		for (let i = 0; i < rotations; i++) {
			let new_x = create_2d_array(this.size[0], this.size[1]);
			for (let i = 0; i < this.size[0]; i++) {
				for (let j = 0; j < this.size[1]; j++) {
					var value = this.x[i][j];
					var k = this.rotation_matrix[i][j][0];
					var l = this.rotation_matrix[i][j][1];
					new_x[k][l] = value;
				}
			};
			this.x = new_x;
		}
		this.rotation_nb = (this.rotation_nb + rotations) % 4;
	}

	replace_values(new_v) {
		for (let i = 0; i < this.size[0]; i++) {
			for (let j = 0; j < this.size[1]; j++) {
				if (this.x[i][j] != 0) {
					this.x[i][j] = new_v;
				}
			}
		}
	}

	turquoise(v) {
		let x = [   
			[0, 0, 0, 0],
			[v, v, v, v],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		];
		return x;
	}

	blue(v) {
		let x = [
			[v, 0, 0],
			[v, v, v],
			[0, 0, 0]
		];
		return x;
	}

	orange(v) {
		let x = [
			[0, 0, v],
			[v, v, v],
			[0, 0, 0]
		]
		return x;
	}

	yellow(v) {
		let x = [   
			[0, v, v, 0],
			[0, v, v, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]
		return x;
	}

	green(v) {
		let x = [   
			[0, v, v],
			[v, v, 0],
			[0, 0, 0]
		]
		return x;
	}

	purple(v) {
		let x = [
			[0, v, 0],
			[v, v, v],
			[0, 0, 0]
		]
		return x;
	}

	red(v) {
		let x = [   
			[v, v, 0],
			[0, v, v],
			[0, 0, 0]
		]
		return x;
	}

}

module.exports = { Piece }
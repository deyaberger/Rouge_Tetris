class Piece {
	constructor() {
		this.keys = {
			"empty" 	: 0,
			"turquoise" : 1,
			"blue" 		: 2,
			"orange" 	: 3,
			"yellow" 	: 4,
			"green" 	: 5,
			"purple" 	: 6,
			"red" 		: 7,
			"blocked" 	: 8
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


}
const { Room } = require('../src/Room');
const { Player } = require('../src/Player');
const { Piece } = require('../src/Piece');
const {max_row, max_col, copy_array} = require('../src/utils');
var chai = require('chai');
var assert = chai.assert;

const room_name = "test_room_name";
const player_name = "test_player_name";
const room = new Room(room_name);
const player = new Player(player_name, room.game.generator);
const tetris = player.tetris;

const { green0, green1, green2, green3} = require("./test_utils");

const piece = new Piece(5, 0);


describe('Piece', function () {
	describe('init', function () {
	  it ('Should be able to init a piece', function() {
			assert.equal(JSON.stringify(piece.size), JSON.stringify([3, 3]));
	  });
	  it ('Should be able to do all rotations', function() {
		piece.rotate(1);
		assert.equal(JSON.stringify(piece.x), JSON.stringify(green1));
		piece.rotate(1);
		assert.equal(JSON.stringify(piece.x), JSON.stringify(green2));
		piece.rotate(1);
		assert.equal(JSON.stringify(piece.x), JSON.stringify(green3));
		piece.rotate(1);
		assert.equal(JSON.stringify(piece.x), JSON.stringify(green0));
		});
	});
});



const { Room } = require('../src/Room');
const { Player } = require('../src/Player');
const { Piece } = require('../src/Piece');
const {max_row, max_col, create_2d_array, copy_array} = require('../src/utils');
var assert = require('assert');

const room_name = "test_room_name";
const player_name = "test_player_name";
const room = new Room(room_name);
const player = new Player(player_name, room.game.generator);
const tetris = player.tetris;


let empty_background = create_2d_array(max_row, max_col);

let orange_piece_init = create_2d_array(max_row, max_col);
orange_piece_init[0] = [0, 0, 0, 3, 3, 3, 0, 0, 0, 0]


let almost_full = create_2d_array(max_row, max_col);
almost_full[18] = [2, 0, 0, 0, 0, 4, 4, 0, 0, 3];
almost_full[19] = [2, 2, 2, 0, 0, 4, 4, 3, 3, 3];

let almost_full_with_fours = create_2d_array(max_row, max_col);
almost_full_with_fours[17] = [0, 0, 0, 4, 4, 0, 0, 0, 0, 0];
almost_full_with_fours[18] = [2, 0, 0, 4, 4, 4, 4, 0, 0, 3];
almost_full_with_fours[19] = [2, 2, 2, 0, 0, 4, 4, 3, 3, 3];

let full_line = create_2d_array(max_row, max_col);
full_line[17] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
full_line[18] = [2, 0, 0, 4, 4, 4, 4, 0, 0, 3];
full_line[19] = [2, 2, 2, 4, 4, 4, 4, 3, 3, 3];

// [
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// 	[0, 0, 0, 4, 4, 0, 0, 0, 0, 0],
// 	[2, 0, 0, 4, 4, 4, 4, 0, 0, 3],
// 	[2, 2, 2, 0, 0, 4, 4, 3, 3, 3]
// ];



describe('Tetris', function () {
	describe('init', function () {
	  it ('should have an empty background', function() {
		assert.equal(JSON.stringify(tetris.background), JSON.stringify(empty_background));
	  });
	  it ('should be of size: (20 X 10)', function() {
		assert.equal(empty_background.length, 20);
		assert.equal(empty_background[0].length, 10);
	  });
	  it('should be able to generate new piece', function () {
		assert(tetris.generate_new_piece());
	  });
	});

	describe('incorporate_pieces', function () {
		it ('should fit orange piece (nb 3)', function() {
			tetris.active_piece = new Piece (3, 0);
			tetris.piece_position = [-1, 3];
			assert(tetris.does_it_fit(tetris.active_piece, tetris.piece_position));
		});
		it ('should hide first line of the tetriminos', function() {
			assert.equal(JSON.stringify(orange_piece_init), JSON.stringify(tetris.get_state()));
		});
		it('should get good state with several pieces on', function () {
			tetris.background = almost_full;
			tetris.active_piece = new Piece(4, 0);
			tetris.piece_position = [17, 2];
			assert.equal(JSON.stringify(tetris.get_state()), JSON.stringify(almost_full_with_fours))
		});
		it('should be able to go down one step', function () {
			tetris.piece_position = [tetris.piece_position[0] + 1, tetris.piece_position[1]];
			let result = tetris.does_it_fit(tetris.active_piece, tetris.piece_position);
			assert(result);
			assert.equal(JSON.stringify(tetris.get_state()), JSON.stringify(full_line));
		});
		it('should be added to background', function () {
			tetris.add_piece_to_array(tetris.background, tetris.active_piece, tetris.piece_position);
			assert.equal(JSON.stringify(tetris.background), JSON.stringify(full_line));
		});
		it('should detect full row', function () {
			tetris.check_full_rows();
			assert.equal(JSON.stringify(tetris.rows_to_delete), "[19]");
		});
	});
});



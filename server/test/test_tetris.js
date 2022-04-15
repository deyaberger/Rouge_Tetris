const { Room } = require('../src/Room');
const { Player } = require('../src/Player');
const { Piece } = require('../src/Piece');
const {max_row, max_col, create_2d_array, copy_array} = require('../src/utils');
var chai = require('chai');
var assert = chai.assert;

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
full_line[18] = [2, 0, 0, 4, 4, 4, 4, 0, 0, 3];
full_line[19] = [2, 2, 2, 4, 4, 4, 4, 3, 3, 3];

let after_delete = create_2d_array(max_row, max_col);
after_delete[19] = [2, 0, 0, 4, 4, 4, 4, 0, 0, 3];

let almost_several_lines = create_2d_array(max_row, max_col);
almost_several_lines[15] = [2, 2, 0, 0, 0, 0, 0, 0, 0, 0];
almost_several_lines[16] = [2, 6, 6, 6, 1, 1, 1, 1, 2, 0];
almost_several_lines[17] = [2, 0, 6, 0, 7, 7, 0, 0, 2, 0];
almost_several_lines[18] = [6, 6, 6, 4, 4, 7, 7, 2, 2, 0];
almost_several_lines[19] = [0, 6, 0, 4, 4, 1, 1, 1, 1, 0];

let several_with_one = create_2d_array(max_row, max_col);
several_with_one[15] = [2, 2, 0, 0, 0, 0, 0, 0, 0, 0];
several_with_one[16] = [2, 6, 6, 6, 1, 1, 1, 1, 2, 1];
several_with_one[17] = [2, 0, 6, 0, 7, 7, 0, 0, 2, 1];
several_with_one[18] = [6, 6, 6, 4, 4, 7, 7, 2, 2, 1];
several_with_one[19] = [0, 6, 0, 4, 4, 1, 1, 1, 1, 1];

let after_delete_several = create_2d_array(max_row, max_col);
after_delete_several[17] = [2, 2, 0, 0, 0, 0, 0, 0, 0, 0];
after_delete_several[18] = [2, 0, 6, 0, 7, 7, 0, 0, 2, 1];
after_delete_several[19] = [0, 6, 0, 4, 4, 1, 1, 1, 1, 1];

let applying_moves = create_2d_array(max_row, max_col);
applying_moves[17] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 2];
applying_moves[18] = [7, 7, 0, 4, 4, 0, 0, 3, 0, 2];
applying_moves[19] = [0, 7, 7, 4, 4, 3, 3, 3, 2, 2];

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
			assert.equal(JSON.stringify(tetris.get_state()), JSON.stringify(orange_piece_init));
		});
		it('should get good state with several pieces on', function () {
			tetris.background = copy_array(almost_full, max_row, max_col);
			tetris.active_piece = new Piece(4, 0);
			tetris.piece_position = [17, 2];
			assert.equal(JSON.stringify(tetris.get_state()), JSON.stringify(almost_full_with_fours))
		});
	});
	describe('deleting rows', function () {
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
		it('should delete row', function () {
			tetris.delete_row();
			assert.equal(JSON.stringify(tetris.background), JSON.stringify(after_delete));
		});
		it('apply move down from start', function() {
			tetris.clean();
			tetris.background = copy_array(almost_full, max_row, max_col);
			tetris.active_piece = new Piece(4, 0);
			tetris.piece_position = [17, 2];
			tetris.apply_move("down");
			assert.equal(JSON.stringify(tetris.get_state()), JSON.stringify(full_line));
		});
		it('apply move time should delete row', function() {
			tetris.apply_move("time");
			assert.equal(JSON.stringify(tetris.rows_to_delete), "[19]");
			assert.equal(JSON.stringify(tetris.background), JSON.stringify(after_delete));
		});
		it('delete several rows', function() {
			tetris.clean();
			tetris.background = copy_array(almost_several_lines, max_row, max_col);
			tetris.active_piece = new Piece(1, 1);
			tetris.piece_position = [16, 7];
			assert.equal(JSON.stringify(tetris.get_state()), JSON.stringify(several_with_one));
			tetris.apply_move("time");
			assert.equal(JSON.stringify(tetris.rows_to_delete), "[16,18]");
			assert.equal(JSON.stringify(tetris.background), JSON.stringify(after_delete_several));
		});
	});
	describe('applying legal moves', function () {
		it ('should be able to go down', function() {
			tetris.full_clean();
			tetris.background = copy_array(applying_moves, max_row, max_col);
			tetris.active_piece = new Piece(6, 2);
			tetris.piece_position = [15, 1];
			assert(tetris.apply_move("down"));
		});
		it ('should be able to go left', function() {
			tetris.piece_position = [15, 1];
			assert(tetris.apply_move("left"));
		});
		it ('should be able to go right', function() {
			tetris.piece_position = [15, 1];
			assert(tetris.apply_move("right"));
		});
		it ('should be able to rotate', function() {
			tetris.piece_position = [15, 1];
			assert(tetris.apply_move("rotate"));
		});
	});
	describe('applying illegal moves', function () {
		it ('should not be able to go down', function() {
			tetris.full_clean();
			tetris.background = copy_array(applying_moves, max_row, max_col);
			tetris.active_piece = new Piece(6, 2);
			tetris.piece_position = [16, 1];
			assert.isFalse(tetris.apply_move("down"));
		});
		it ('should not be able to go left', function() {
			tetris.piece_position = [16, 1];
			assert.isFalse(tetris.apply_move("left"));
		});
		it ('should not be able to go right', function() {
			tetris.piece_position = [16, 1];
			assert.isFalse(tetris.apply_move("right"));
		});
		it ('should not be able to rotate', function() {
			tetris.active_piece = new Piece(6, 1);
			tetris.piece_position = [16, 7];
			assert.isFalse(tetris.apply_move("rotate"));
		});
	});
});



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

const { empty_background,
	orange_piece_init,
	almost_full,
	almost_full_with_fours,
	full_line,
	after_delete,
	almost_several_lines,
	several_with_one,
	after_delete_several,
	applying_moves,
	almost_the_end,
	almost_the_end_with_six,
	end_with_six,
	almost_full_with_fours_spectrum,
	after_delete_spectrum,
	ghost_test
	} = require("./test_utils");

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
			tetris.show_ghost = false
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

	describe('end of game', function () {
		it ('One last piece before the end', function() {
			tetris.full_clean();
			tetris.background = copy_array(almost_the_end, max_row, max_col);
			assert(tetris.apply_move("down"));
			tetris.active_piece = new Piece(6, 0)
			assert.equal(JSON.stringify(tetris.get_state()), JSON.stringify(almost_the_end_with_six));
			tetris.apply_move("down");
			tetris.apply_move("time");
			assert.equal(JSON.stringify(tetris.background), JSON.stringify(end_with_six));
		});
	});

	describe('spectre', function () {
		it ('Check accuracy of spectrum', function() {
			tetris.full_clean();
			tetris.background = copy_array(almost_full_with_fours, max_row, max_col);
			tetris.update_spectre();
			assert.equal(JSON.stringify(tetris.spectre), JSON.stringify(almost_full_with_fours_spectrum));
		});
		it ('Check spectrum after row delete', function() {
			tetris.full_clean();
			tetris.background = copy_array(almost_full, max_row, max_col);
			tetris.active_piece = new Piece(4, 0);
			tetris.piece_position = [17, 2];
			tetris.apply_move("down");
			tetris.apply_move("time");
			tetris.update_spectre();
			assert.equal(JSON.stringify(tetris.spectre), JSON.stringify(after_delete_spectrum));
		});
	});

	describe('ghost', function () {
		it ('Should stop at the first colision', function() {
			tetris.background = copy_array(ghost_test, max_row, max_col);
			tetris.active_piece = new Piece(2, 3);
			tetris.piece_position = [5,3];
			tetris.update_spectre();
			tetris.get_ghost(tetris.active_piece, tetris.piece_position)
			assert.equal(JSON.stringify(tetris.ghost_position), JSON.stringify([15,3]));
		});
	});
});



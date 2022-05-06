const { Room } = require('../src/Room');
const { Player } = require('../src/Player');
const { Piece } = require('../src/Piece');
const {max_row, max_col, copy_array} = require('../src/utils');
var chai = require('chai');
var assert = chai.assert;

const room_name = "test_room_name";
const player_name_1 = "test_player_name_1";
const player_name_2 = "test_player_name_2";
const room = new Room(room_name);
const player_1 = new Player(player_name_1, room.game.seed);
const player_2 = new Player(player_name_2, room.game.seed);
room.players_list["p1"] = player_1;
room.players_list["p2"] = player_2;
const tetris_1 = player_1.tetris;
const tetris_2 = player_2.tetris;
room.game.on = true;


const {
	almost_full,
	after_delete,
	after_delete_oponent,
	after_2nd_delete_oponent
	} = require("./test_utils");

describe('Game', function () {
	describe('init', function () {
	  it ('First piece should be the same for both players', function() {
		room.game.update_players_state(null, null, true);
		assert.equal(JSON.stringify(tetris_1.get_state()), JSON.stringify(tetris_2.get_state()));
	  });
	  it ('should be the same after second step', function() {
		room.game.update_players_state(null, null, true);
		assert.equal(JSON.stringify(tetris_1.get_state()), JSON.stringify(tetris_2.get_state()));
	  });
	describe('delete and block rows', function() {
		it ('should delete player_1 last row', function() {
		player_1.tetris.background = copy_array(almost_full, max_row, max_col);
		player_1.tetris.active_piece = new Piece(4, 0);
		player_1.tetris.piece_position = [18, 2];
		room.game.update_players_state(null, null, true);
		assert.equal(JSON.stringify(tetris_1.background), JSON.stringify(after_delete));
		});
		it ('should block player_2 last row', function() {
			assert.equal(JSON.stringify(tetris_2.background), JSON.stringify(after_delete_oponent));
			});
		it ('should keep in memory player_1 recent deletion', function() {
			assert.equal(JSON.stringify(tetris_1.rows_to_delete), "[19]");
			});
		it ('should no have any rows to block for palyer 1', function() {
				assert.equal(JSON.stringify(tetris_1.rows_to_block), "0");
			});
		it ('should no have any rows to delete for palyer 2', function() {
				assert.equal(JSON.stringify(tetris_2.rows_to_delete), "[]");
			});
		});
	});
});
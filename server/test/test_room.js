const { Room, RoomManager } = require('../src/Room');
const { Player } = require('../src/Player');
const {max_row, max_col, copy_array} = require('../src/utils');
var chai = require('chai');
var assert = chai.assert;
const {
	empty_background,
	} = require("./test_utils");

const room_manager = new RoomManager();

var room_A = null;
var room_B = null;
var room_C = null;
var room_D = null;

var player_1 = null;
var player_2 = null;
var player_3 = null;
var player_4 = null;

const player_1_name = "player_1";
const player_1_id = "p1";
const player_2_name = "player_2";
const player_2_id = "p2";
const player_3_name = "player_3";
const player_3_id = "p3";
const player_4_name = "player_4";
const player_4_id = "p4";

const room_A_name = "room_A";
const room_B_name = "room_B";
const room_C_name = "room_C";
const room_D_name = "room_D";

const fake_seed = 0.5



describe('Room', function () {
	describe('init', function () {
	  it ('should create room', function() {
		room_A = new Room(room_A_name);
		assert.equal(JSON.stringify(room_A.name), JSON.stringify(room_A_name));
	  });
	  it ('should get empty state', function() {
		assert.equal(JSON.stringify(room_A.get_state()), "{}");
	  })
	  it ('should add player to room', function() {
		player_1 = new Player(player_1_name, fake_seed);
		var fake_chaussette = {
			"id" : player_1_id
		}
		room_manager.connect_room_player(room_A, player_1, fake_chaussette);
		assert.equal(room_A.players_list[player_1_id], player_1);
	  });
	  it ('should add room to room list', function() {
		assert.equal(room_manager.global_rooms_list[room_A_name], room_A);
	  });
	});
	describe('Add rooms', function () {
		it ('should find the room', function() {
			msg = {
				"room_name" : room_A_name,
				"player_name" : player_2_name
			}
			room_B = room_manager.find_or_create_room(msg.room_name);
			assert.equal(room_B, room_A);
		});
		it ('should find the room', function() {
			msg = {
				"room_name" : room_B_name,
				"player_name" : player_2_name
			}
			room_B = room_manager.find_or_create_room(msg.room_name);
			assert.notEqual(room_B, room_A);
		});
		it ('should connect player to room', function() {
			player_2 = new Player(msg.player_name, fake_seed);
			var fake_chaussette = {
				"id" : player_2_id
			}
			room_manager.connect_room_player(room_B, player_2, fake_chaussette);
			assert.equal(room_B.players_list[player_2_id], player_2);
		});
		it('Once game started, room should not be available', function() {
			room_A.game.on = true;
			assert.equal(room_manager.is_room_available(room_A), false)
		});
		it('should assert if a players name already exists', function() {
			assert.equal(room_manager.player_already_exists(player_2_name), true);
		});
		it('should assert if a players name already exists or not', function() {
			assert.notEqual(room_manager.player_already_exists(player_3_name), true);
		});
		it ('should handle socket msg', function() {
			msg = {
				"room_name" : room_C_name,
				"player_name" : player_3_name
			}
			room_C = new Room(room_C_name);
			room_C.game.seed = fake_seed
			room_C.master = player_3_name;
			var test = room_manager.handle_socket_msg(msg);
			if (test != null && test.game != null) {
				test.game.seed = fake_seed
			}
			assert.equal(JSON.stringify(room_C), JSON.stringify(test))
		})
		it ('should have 3 rooms', function() {
			assert.equal(Object.keys(room_manager.global_rooms_list).length, 3)
		});
		it ('should be able to delete one room', function() {
			room_manager.remove_room(room_A_name);
			assert.equal(Object.keys(room_manager.global_rooms_list).length, 2);
		});
		it ('should be able to get spectres', function() {
			assert.equal(JSON.stringify(room_B.get_other_player_spectres(player_2_id)), "{}")
		});
		it ('should get spectres when there is other players', function() {
			msg = {
				"room_name" : room_B_name,
				"player_name" : player_4_name
			}
			var fake_chaussette = {
				"id" : player_4_id
			}
			player_4 = new Player(msg.player_name, fake_seed)
			room_manager.connect_room_player(room_B, player_4, fake_chaussette);
			let spectres = {
				"player_4" : empty_background
			}
			assert.equal(JSON.stringify(room_B.get_other_player_spectres(player_2_id)), JSON.stringify(spectres))
		});
		it ('should get spectres when colors are on', function() {
			let spectres = {
				"player_4" : empty_background
			}
			room_B.colors = true;
			assert.equal(JSON.stringify(room_B.get_other_player_spectres(player_2_id)), JSON.stringify(spectres))
		});
		it ('should get a state', function() {
			assert(room_B.get_state(player_2_id));
		});
		it ('should get a state for roommanager', function() {
			assert(room_manager.get_state());
		});
	});
});
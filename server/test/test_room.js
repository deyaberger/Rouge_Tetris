const { Room, RoomManager } = require('../src/Room');
const { Player } = require('../src/Player');
const {max_row, max_col, copy_array} = require('../src/utils');
var chai = require('chai');
var assert = chai.assert;

var room = null;
var player = null;

const room_manager = new RoomManager();



describe('Room', function () {
	describe('init', function () {
	  it ('should create room', function() {
		room = new Room('test');
		assert.equal(JSON.stringify(room.name), JSON.stringify("test"));
	  });
	  it ('should get empty state', function() {
		assert.equal(JSON.stringify(room.get_state()), "{}");
	  })
	  it ('should add player to room', function() {
		player = new Player("test_player", 0.5);
		var fake_chaussette = {
			"id" : "p1"
		}
		room_manager.connect_room_player(room, player, fake_chaussette);
		assert.equal(room.players_list["p1"], player);
	  });
	  it ('should add room to room list', function() {
		assert.equal(room_manager.global_rooms_list["test"], room);
	  });
	});
	describe('handle duplicates', function () {
		it ('should find the room', function() {
			msg = {
				"room_name" : "test",
				"player_name" : "test_player2"
			}
			let room2 = room_manager.find_or_create_room(msg.room_name);
			assert.equal(room2, room);
		});
		it ('should find the room', function() {
			msg = {
				"room_name" : "test2",
				"player_name" : "test_player3"
			}
			room2 = room_manager.find_or_create_room(msg.room_name);
			assert.notEqual(room2, room);
		});
		it ('should connect player to room', function() {
			let player2 = new Player(msg.player_name, 0.5);
			var fake_chaussette = {
				"id" : "p2"
			}
			room_manager.connect_room_player(room2, player2, fake_chaussette);
			assert.equal(room2.players_list["p2"], player2);
		});
		it('Once game started, room should not be available', function() {
			room.game.on = true;
			assert.equal(room_manager.is_room_available(room), false)
		});
		it('should assert if a players name already exists', function() {
			assert.equal(room_manager.player_already_exists("test_player3"), true);
		});
		it('should assert if a players name already exists or not', function() {
			assert.notEqual(room_manager.player_already_exists("test_player4"), true);
		});
		it ('should handle socket msg', function() {
			msg = {
				"room_name" : "test4",
				"player_name" : "test_player5"
			}
			var test = new Room("test4");
			test.game.seed = 0.3
			test.master = "test_player5";
			var room3 = room_manager.handle_socket_msg(msg);
			if (room3 != null && room3.game != null) {
				room3.game.seed = 0.3
			}
			assert.equal(JSON.stringify(room3), JSON.stringify(test))
		})
	});
});
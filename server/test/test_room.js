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
		room_manager.connect_room_player(room, player, "p1");
		assert.equal(room.players_list["p1"], player);
	  });
	  it ('should add room to room list', function() {
		assert.equal(room_manager.global_rooms_list["test"], room);
	  });
	});
});
class Room {
	constructor(data) {
		console.log("COUCOUC")
		this.data = JSON.parse(data);
	  this.name = this.data["room"];
	  console.log("DATA " + data);
	  console.log("DATA ROOM " + this.data.room);
	  console.log("NAME " + this.name);
	}
  }

  module.exports = {Room}

  
// with { "type": "commonjs" } in your package.json
const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");
const assert = require("chai").assert;
const { Room } = require("../src/Room");

describe("my awesome project", () => {
	  let clientSocket;
	// 	before(() => {
	// 		console.log("")
	// 		// clientSocket = new Client(`http://localhost:3000`);
	// 	})
	
	
	after(() => {
		console.log("AFTER")
		clientSocket.close();
	});
	
	
	it("should work", (done) => {
		clientSocket = new Client(`http://localhost:3000`);

		console.log("----------");
		clientSocket.on("hello", (arg) => {
			console.log("**********");
			assert.equal(arg, "world");
			done()
		});
	});

	it("hola", (done) => {
		const myroom = new Room("deya");
		assert.equal(myroom.name, "deya");
		done()
	})
});
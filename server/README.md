# Rouge_Tetris

## ServerSide
connect to http://localhost:3000

</br>

### PREREQUISITS:
1- Create a listener with the following event name and content:
```javascript
event_name = "game_state"
msg = {
     "game_on" : boolean, // true or false
	 "game_pause" : boolean, // true or false
     "room_name" : str, // ex: "ma_chambre"
     "player_name" : str, // ex: "deya"
	 "player_has_lost" : false // or true
     "master" : str, // ex: "deya"
     "winner" : null || str, // ex: "johanna"
     "tetris" : 2D array,
     "spectres" : dict // key = player_name, value = 2Darray
    }
```
Exemple:
```javascript
socket.on("game_state", msg => {
	change_layout();
})
```
1b - State event:
You'll receive a few 'ping' and you'll have to answer with a pong so you can receive a game state:
Server side (first message):
```javascript
event_name = "state_ping"
msg = true // does not matter
```
Client side (reply):
```javascript
event_name = "state_pong"
msg = true // does not matter
```
Server side: replies with game state

### 0- Before Joining a room:
When a client connects to the server he receives a message with the following info (parse it if you want to display usefull information before joining a room):
Client side:
```javascript
event_name = "room_info"
msg = true // does not matter
```
Server side (repplying):
```javascript
event_name = "room_state" // ! Check : maybe parse it before sending it
msg = {
    <ROOM_NAME> : {
			name : name // str
			master : msters_name // str
			players_list: {} // key: socket ID, Value: Tetris
			game: game // object
			colors: true // boolean
		}  
    }

```


### 1- Join a room:
Emit an event with the following name and content:
Client side: (server repplies with a game_State)
```javascript
event_name = "join_room"
msg = {
	"room_name" : "a_room_name",
	"player_name" : "a_unique_player_name"
}
```
exemple:
```javascript
socket.emit('join_room', msg);
```
</br>

### 2- Start a game:
Emit an event with the following name and content:
Client side:
```javascript
event_name = "start"
msg = true
```

### 3- During the game:
**Make a move:**</br>
If you want to make moves, emit an event with the following name and content:
```javascript
event_name = "move"
msg = "down" // or "left", "right", "rotate", "space"
```
**Other Players Spectrums:**</br>
Show just the shadow of other players tetris or show the complete tetris with the moving piece of the other players:
```javascript
event_name = "colors"
msg = true // true for full tetris, false for just spectrum
```
**Tetris ghost:**</br>
Show or hide the current piece shadow:
```javascript
event_name = "ghost"
msg = true // true for showing the shadow, false for not showing it
```

### 4- Pause, Stop, Restart game:
**Pause game:**</br>
If you want to pause the game (make it possible only for master):
```javascript
event_name = "pause"
msg = true or false
```
**Stop game:**</br>
If you want to stop (end) the game that has already started (only available for master):
```javascript
event_name = "stop"
msg = true // msg has no importance
```
**Restart game:**</br>
If you want to restart the game that has been stoped or finished (same room, same player, different pieces):
```javascript
event_name = "restart"
msg = true // msg has no importance
```

### 5- Quit a game:
If you want to quit a game and go back to the home page:
```javascript
event_name = "quit"
msg = true // msg has no importance
```
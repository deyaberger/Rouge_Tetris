# Rouge_Tetris

## ServerSide
connect to http://localhost:3000

</br>

### PREREQUISITS:
Create a listener with the following event name and content:
```javascript
event_name = "game_state"
msg = {
     "game_on" : boolean, // true or false
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

### 1- Join a room:
Emit an event with the following name and content:
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

### 2- Start game:
Emit an event with the following name and content:
```javascript
event_name = "start"
msg = true
```

### 3- During the game:
If you want to make moves, emit an event with the following name and content:
```javascript
event_name = "move"
msg = "down" // or "left", "right", "rotate", "space"
```
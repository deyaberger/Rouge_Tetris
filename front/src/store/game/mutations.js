export function setGameState(state, gameState) {
  state.gameOn = gameState.game_on;
  state.gamePaused = gameState.game_pause;
  state.master = gameState.master;
  state.playerHasLost = gameState.player_has_lost;
  state.playerName = gameState.player_name;
  state.roomName = gameState.room_name;
  state.rowsAboutToBeBlocked = gameState.rows_about_to_be_blocked;
  state.rowsAboutToDisappear = gameState.rows_about_to_disappear;
  state.spectres = gameState.spectres;
  state.tetris = gameState.tetris;
  state.winner = gameState.winner;
}

export function setRoomState(state, roomState) {
  state.roomState = roomState;
}

export function quit(state) {
  state.gameOn = false;
  state.master = '';
  state.playerHasLost = false;
  state.playerName = '';
  state.roomName = '';
  state.rowsAboutToBeBlocked = [];
  state.rowsAboutToDisappear = [];
  state.spectres = {};
  state.tetris = [];
  state.winner = null;
}

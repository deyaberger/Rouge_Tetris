export function getRoomState(state) {
  return state.roomState;
}

export function getGameOn(state) {
  return state.gameOn;
}

export function getGamePaused(state) {
  return state.gamePaused;
}

export function getRoomName(state) {
  return state.roomName;
}

export function getPlayerName(state) {
  return state.playerName;
}

export function getMaster(state) {
  return state.master;
}

export function getWinner(state) {
  return state.winner;
}

export function getSpectres(state) {
  return state.spectres;
}

export function getTetris(state) {
  return state.tetris;
}

export function getColors(state) {
  return state.colors;
}

export function getPlayerHasLost(state) {
  return state.playerHasLost;
}

export function getRowsAboutToBeBlocked(state) {
  return state.rowsAboutToBeBlocked;
}

export function getRowsAboutToDisappear(state) {
  return state.rowsAboutToDisappear;
}

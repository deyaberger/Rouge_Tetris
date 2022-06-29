export function setPlayerError(state, error) {
  state.player = error;
}

export function setRoomError(state, error) {
  state.room = error;
}

export function clear(state) {
  state.player = '';
  state.room = '';
}

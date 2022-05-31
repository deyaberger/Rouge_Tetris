export function processGameState({ commit }, gameState) {
  commit('setGameState', gameState);
}

export function setRoomState({ commit }, roomState) {
  commit('setRoomState', roomState);
}

export function quit({ commit }) {
  commit('quit');
}

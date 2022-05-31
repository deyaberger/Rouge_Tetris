export function processGameState({ commit }, gameState) {
  commit('setGameState', gameState);
}

export function quit({ commit }) {
  this.$socket.emit('quit');
  commit('quit');
}

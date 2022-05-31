export function processGameState({ commit }, gameState) {
  commit('setGameState', gameState);
}

export function quit({ commit }) {
  commit('quit');
}

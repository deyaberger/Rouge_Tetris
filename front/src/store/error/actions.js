export function player({ commit }, hint) {
  commit('setPlayerError', hint);
}

export function room({ commit }, hint) {
  commit('setRoomError', hint);
}

export function clear({ commit }) {
  commit('clear');
}

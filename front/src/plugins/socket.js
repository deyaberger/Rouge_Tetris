import { socket } from '../boot/socket.js';

export default function createWebSocketPlugin() {
  return (store) => {
    socket.on('game_state', (ret) => {
      store.dispatch('game/processGameState', ret);
    });
  };
}

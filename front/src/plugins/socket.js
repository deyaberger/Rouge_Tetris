import { socket } from '../boot/socket.js';

export default function createWebSocketPlugin() {
  return (store) => {
    socket.on('game_state', (ret) => {
      store.dispatch('game/processGameState', ret);
    });

    socket.on('new_player', () => {
      socket.emit('state', 'new_player');
    });

    socket.on('a_player_left', () => {
      socket.emit('state', 'a_player_left');
    });
  };
}

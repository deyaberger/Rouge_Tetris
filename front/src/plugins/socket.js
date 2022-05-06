import { socket } from '../boot/socket.js';

export default function createWebSocketPlugin() {
  return (store) => {
    socket.on('game_state', (ret) => {
      console.log('state', ret);
      store.dispatch('game/processGameState', ret);
    });

    socket.on('new_player', () => {
      console.log('joined');
      const ret = socket.emit('state', 'new_player');
      console.log('ret', ret);
    });

    socket.on('a_player_left', () => {
      console.log('left');
      const ret = socket.emit('state', 'a_player_left');
      console.log('ret', ret);
    });
  };
}

import { socket } from '../boot/socket.js';

export default function createWebSocketPlugin() {
  return (store) => {
    socket.on('game_state', (ret) => {
      console.log('state', ret);
      store.dispatch('game/processGameState', ret);
    });

    socket.on('room_state', (ret) => {
      console.log('room_state', ret);
      store.dispatch('game/setRoomState', ret);
    });

    socket.on('state_ping', () => {
      socket.emit('state_pong', 'pong');
    });

    socket.on('player_name_error', (event) => {
      socket.emit('room_info');
      store.dispatch('error/player', event);
    });

    socket.on('room_error', (event) => {
      socket.emit('room_info');
      store.dispatch('error/room', event);
    });
  };
}

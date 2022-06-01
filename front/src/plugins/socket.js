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
      console.log('ping');
      const ret = socket.emit('state_pong', 'pong');
      console.log('ret', ret);
    });

    socket.on('player_name_error', (event) => {
      socket.emit('room_info');
      console.log('player_name_error', event);
      store.dispatch('error/player', event);
    });

    socket.on('room_error', (event) => {
      socket.emit('room_info');
      console.log('player_room_error', event);
      store.dispatch('error/room', event);
    });
  };
}

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

    socket.on('pause', () => {
      console.log('pause');
      const ret = socket.emit('state', 'pause');
      console.log('ret', ret);
    });

    socket.on('colors_change', () => {
      console.log('colors_change');
      const ret = socket.emit('state', 'colors_change');
      console.log('ret', ret);
    });

    socket.on('player_name_error', (event) => {
      console.log('player_name_error', event);
      store.dispatch('error/player', event);
    });

    socket.on('player_room_error', (event) => {
      console.log('player_room_error', event);
      store.dispatch('error/room', event);
    });
  };
}

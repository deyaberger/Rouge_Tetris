import { boot } from 'quasar/wrappers';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export default boot(({ app }) => {
  app.config.globalProperties.$io = io;
  app.config.globalProperties.$socket = socket;
});

export { socket };

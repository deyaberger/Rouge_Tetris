import { boot } from 'quasar/wrappers';
import { io } from 'socket.io-client';

export default boot(({ app }) => {
  const socket = io('http://localhost:3000');

  app.config.globalProperties.$io = io;

  app.config.globalProperties.$socket = socket;
});

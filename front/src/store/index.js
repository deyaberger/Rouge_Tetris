import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';

import game from './game';

import createWebSocketPlugin from '../plugins/socket.js';

export default store((/* { ssrContext } */) => {
  const Store = createStore({
    modules: {
      game,
    },
    plugins: [createWebSocketPlugin()],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});

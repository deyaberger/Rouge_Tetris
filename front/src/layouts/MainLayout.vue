<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Red Tetris
        </q-toolbar-title>
        <q-btn
          v-if="this.$route.path === '/game'"
          flat
          label="Quit Room"
          @click="quitRoom"/>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  methods: {
    quitRoom() {
      const msg = {
        room_name: 'laplusbelle',
        player_name: 'deya',
      };
      this.$socket.emit('quit_room', msg);
      this.$socket.on('game_state', (ret) => {
        console.log('msgGamePage', ret);
        this.$router.push('/');
      });
    },
  },
});
</script>

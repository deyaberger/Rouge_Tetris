<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <span class="text-secondary">Stonger Tetris</span>
        </q-toolbar-title>
        <q-toolbar-title>
          <span class="text-secondary text-bold">{{ room }}</span>
        </q-toolbar-title>
        <q-btn
          v-if="isInGame"
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
  computed: {
    room() {
      return this.$store.getters['game/getRoomName'];
    },
    player() {
      return this.$store.getters['game/getPlayerName'];
    },
    isInGame() {
      return (this.room.length > 0 && this.player.length > 0);
    },
  },
  methods: {
    quitRoom() {
      this.$store.dispatch('game/quit');
      this.$socket.emit('quit');
    },
  },
});
</script>

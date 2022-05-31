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
          v-if="isMuted"
          flat
          :icon="'volume_off'"
          @click="mute"/>
        <q-btn
          v-else
          flat
          :icon="'volume_up'"
          @click="mute"/>
        <q-btn
          v-show="gameOn"
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
  data() {
    return {
      audio: '',
      isPlaying: false,
      isMuted: false,
    };
  },
  mounted() {
    // eslint-disable-next-line
    this.audio = new Audio(require('../assets/stronger-tetris.mp3'));
    this.audio.loop = true;
    this.audio.volume = 0.3;
  },
  computed: {
    room() {
      return this.$store.getters['game/getRoomName'];
    },
    payer() {
      return this.$store.getters['game/getPlayerName'];
    },
    gameOn() {
      return this.$store.getters['game/getGameOn'];
    },
    isInGame() {
      return (this.room && this.player);
    },
  },
  methods: {
    play() {
      this.audio.play();
      this.isPlaying = true;
    },
    mute() {
      if (this.audio.muted) {
        this.audio.muted = false;
        this.isMuted = false;
      } else {
        this.audio.muted = true;
        this.isMuted = true;
      }
    },
    stop() {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isPlaying = false;
    },
    quitRoom() {
      this.$store.dispatch('game/quit');
    },
  },
  watch: {
    gameOn(val) {
      if (val) {
        this.play();
      } else {
        this.stop();
      }
    },
  },
});
</script>

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
        <template v-if="isInGame">
          <template v-if="master === player">
            <q-btn
              v-if="gameOn"
              flat
              :icon="'pause'"
              @click="playGame"/>
            <q-btn
              v-else
              flat
              :icon="'play_arrow'"
              @click="pauseGame"/>
          </template>
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
            flat
            label="Quit Room"
            @click="quitRoom"/>
        </template>
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
    this.audio.volume = 0.2;
    this.mute();
  },
  computed: {
    room() {
      return this.$store.getters['game/getRoomName'];
    },
    player() {
      return this.$store.getters['game/getPlayerName'];
    },
    master() {
      return this.$store.getters['game/getMaster'];
    },
    gameOn() {
      return this.$store.getters['game/getGameOn'];
    },
    isInGame() {
      return this.room && this.player;
    },
  },
  methods: {
    playGame() {
      this.$socket.emit('pause');
    },
    pauseGame() {
      this.$socket.emit('continue');
    },
    playMusic() {
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
      this.$socket.emit('quit');
      this.$store.dispatch('error/clear');
      this.$store.dispatch('game/quit');
    },
  },
  watch: {
    gameOn(val) {
      if (val) {
        this.playMusic();
      } else {
        this.stop();
      }
    },
  },
});
</script>

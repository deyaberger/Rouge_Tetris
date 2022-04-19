<template>
  <q-page
    style="min-height: 0px">
    <div
      v-if="gameOn"
      @click="handleUp"
      v-touch-swipe.mouse.right="handleRight"
      v-touch-swipe.mouse.left="handleLeft"
      v-touch-swipe.mouse.down="handleSpace"
      v-touch-swipe.mouse.up="handleSpace"
      class="custom-area row justify-between">
      <div class="col-4">
        <GameInfo />
        <GameSpectres />
      </div>
      <div class="col-auto">
        <TetrisBoard />
      </div>
      <div class="col-4">
        <GameControls/>
      </div>
    </div>
    <div v-else class="custom-area row justify-between">
      <div class="col-4">
        <GameInfo />
        <GameSpectres />
      </div>
      <div class="col-auto">
        <TetrisBoard />
      </div>
      <div class="col-4">
        <GameControls/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import TetrisBoard from '../components/TetrisBoard';
import GameInfo from '../components/GameInfo';
import GameControls from '../components/GameControls';
import GameSpectres from '../components/GameSpectres';

export default defineComponent({
  name: 'GamePage',
  components: {
    TetrisBoard,
    GameInfo,
    GameControls,
    GameSpectres,
  },
  created() {
    // window.addEventListener('keydown', this.keyEvent);
    window.addEventListener('keydown', (e) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
        this.keyEvent(e);
      }
    }, false);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.keyEvent);
  },
  computed: {
    gameOn() {
      return this.$store.getters['game/getGameOn'];
    },
  },
  methods: {
    handleSpace() {
      console.log('space');
      if (this.gameOn) {
        console.log('space + GameOn');
      }
    },
    handleDown() {
      console.log('down');
      if (this.gameOn) {
        console.log('down + GameOn');
      }
    },
    handleUp() {
      console.log('up');
      if (this.gameOn) {
        console.log('up + GameOn');
      }
    },
    handleLeft() {
      console.log('left');
      if (this.gameOn) {
        console.log('left + GameOn');
      }
    },
    handleRight() {
      console.log('right');
      if (this.gameOn) {
        console.log('right + GameOn');
      }
    },
    keyEvent(event) {
      if (event.code === 'space') {
        this.handleSpace();
      }
      if (event.code === 'ArrowDown') {
        this.handleDown();
      }
      if (event.code === 'ArrowUp') {
        this.handleUp();
      }
      if (event.code === 'ArrowLeft') {
        this.handleLeft();
      }
      if (event.code === 'ArrowRight') {
        this.handleRight();
      }
    },
  },
});
</script>

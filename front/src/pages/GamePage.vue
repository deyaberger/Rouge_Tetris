<template>
  <q-page style="min-height: 0px">
    <GameDialog :isMaster="master === player"/>
    <div v-if="gameOn"
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
import GameDialog from '../components/GameDialog';

export default defineComponent({
  name: 'GamePage',
  components: {
    TetrisBoard,
    GameInfo,
    GameControls,
    GameSpectres,
    GameDialog,
  },
  created() {
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
    room() {
      return this.$store.getters['game/getRoomName'];
    },
    player() {
      return this.$store.getters['game/getPlayerName'];
    },
    master() {
      return this.$store.getters['game/getMaster'];
    },
    isInGame() {
      return (this.room.length > 0 && this.player.length > 0);
    },
  },
  methods: {
    joinRoom() {
      const msg = {
        player_name: this.playerName,
        room_name: this.roomName,
      };
      this.$socket.emit('join_room', msg);
    },
    handleSpace() {
      console.log('this.$router.params', this.$router.params);
      if (this.gameOn) {
        this.$socket.emit('join_room', 'space');
      }
    },
    handleDown() {
      if (this.gameOn) {
        this.$socket.emit('move', 'down');
      }
    },
    handleUp() {
      if (this.gameOn) {
        this.$socket.emit('move', 'rotate');
      }
    },
    handleLeft() {
      if (this.gameOn) {
        this.$socket.emit('move', 'left');
      }
    },
    handleRight() {
      if (this.gameOn) {
        this.$socket.emit('move', 'right');
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
  watch: {
    isInGame: {
      immediate: true,
      handler(val) {
        if (!val) {
          this.$router.push('/');
        }
      },
    },
  },
});
</script>

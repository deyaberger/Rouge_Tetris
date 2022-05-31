<template>
  <q-page class="flex flex-center">
    <div v-if="!connecting" style="width: 65vw; height: 65vh">
      <div class="row justify-center">
        <h2 class="text-primary">
          Welcome to a Stronger
          <span class="text-secondary">Tetris</span>
        </h2>
      </div>
      <div class="q-ma-sm row justify-center">
        <div class="col" style="max-width: 300px">
          <q-input
            class="q-ma-sm row justify-center"
            color="primary"
            square outlined
            v-model="playerName" label="Player Name"/>
          <div
            v-show="playerError"
            class="q-ma-sm row justify-center text-accent">
            {{ `Player name already taken try: ${playerError}` }}
          </div>
        </div>
      </div>
      <div class="q-ma-sm row justify-center">
        <div class="col" style="max-width: 300px">
          <q-input
            class="q-ma-sm row justify-center"
            color="primary"
            square outlined
            v-model="roomName" label="Room Name"/>
          <div
            v-show="roomError"
            class="q-ma-sm row justify-center text-accent">
            {{ `Room name already taken try: ${roomError}` }}
          </div>
        </div>
      </div>

      <div class="row justify-center">
        <q-btn
          :disabled="isEmpty"
          flat
          @click="joinRoom"
          class="text-primary"
          label="GO"/>
      </div>
    </div>
    <q-circular-progress
      v-else
      indeterminate
      size="100px"
      color="primary"
      class="q-ma-md"/>
  </q-page>
</template>

<script>
export default {
  name: 'MenuPage',
  data() {
    return {
      connecting: false,
      playerName: '',
      roomName: '',
    };
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (['Enter'].includes(e.code)) {
        e.preventDefault();
        this.keyEvent(e);
      }
    }, false);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.keyEvent);
  },
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
    isEmpty() {
      return this.playerName.length === 0 || this.roomName.length === 0;
    },
    playerError() {
      return this.$store.getters['error/getPlayerError'];
    },
    roomError() {
      return this.$store.getters['error/getRoomError'];
    },
  },
  methods: {
    keyEvent(event) {
      if (event.code === 'Enter') {
        this.joinRoom();
      }
    },
    joinRoom() {
      if (this.room.length === 0) {
        const msg = {
          player_name: this.playerName,
          room_name: this.roomName,
        };
        if (msg.player_name && msg.room_name
        && msg.player_name.length > 0 && msg.room_name.length > 0) {
          this.$socket.emit('join_room', msg);
        }
      }
    },
  },
  watch: {
    isInGame: {
      immediate: true,
      handler(val) {
        if (val) {
          const gameRoute = `${this.room}[${this.player}]`;
          this.$router.push(gameRoute);
        }
      },
    },
  },
};
</script>

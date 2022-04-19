<template>
  <q-page class="flex flex-center">
    <div v-if="!connecting" style="width: 65vw; height: 65vh">
      <div class="row justify-center">
        <h2 class="text-primary">Welcome to Red Tetris</h2>
      </div>
      <div class="q-ma-sm row justify-center">
        <q-input
          color="primary"
          square outlined
          v-model="playerName" label="Player Name"/>
      </div>
      <div class="q-ma-sm row justify-center">
        <q-input
          color="primary"
          square outlined
          v-model="roomName" label="Room Name"/>
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
  computed: {
    isEmpty() {
      return this.playerName.length === 0 || this.roomName.length === 0;
    },
  },
  methods: {
    joinRoom() {
      const msg = {
        player_name: this.playerName,
        room_name: this.roomName,
      };
      this.$socket.emit('join_room', msg);
      this.$socket.on('game_state', (ret) => {
        console.log('msgGamePage', ret);
        this.$router.push(`/${this.roomName}/${this.playerName}`);
      });
    },
  },
};
</script>

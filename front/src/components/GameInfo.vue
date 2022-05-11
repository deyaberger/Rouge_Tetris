<template>
  <q-card flat>
    <q-card-section>
      <div class="row q-my-md">
        <span class="text-bold">Player : </span>{{ playerName }}
      </div>
      <div class="row q-my-md">
        <span class="text-bold">Master : </span>{{ master }}
      </div>
      <div v-if="playerName === master" class="row q-my-md">
        <span class="text-bold">Spectres details :</span>
        <q-toggle color="secondary" v-model="details"/>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'GameInfo',
  data() {
    return {
      details: false,
    };
  },
  computed: {
    room() {
      return this.$store.getters['game/getRoomName'];
    },
    playerName() {
      return this.$store.getters['game/getPlayerName'];
    },
    master() {
      return this.$store.getters['game/getMaster'];
    },
  },
  watch: {
    details() {
      this.$socket.emit('colors', this.details);
    },
  },
};
</script>

<template>
  <q-card flat>
    <q-card-section>
      <div class="row">
        <span class="text-bold">Room : </span>{{ room }}
      </div>
      <div class="row">
        <span class="text-bold">Player : </span>{{ playerName }}
      </div>
      <div class="row">
        <span class="text-bold">Master : </span>{{ master }}
      </div>
      <div v-if="winner" class="row">
        <span class="text-bold">Winner : </span>{{ Winner }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'GameInfo',
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
    winner() {
      return this.$store.getters['game/getWinner'];
    },
  },
};
</script>

<template>
  <q-dialog v-model="show" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <template v-if="winner">
            <div class="q-ml-sm" > The winner is {{ winner }} !</div>
          </template>
          <template v-else>
            <div class="q-ml-sm" > Game ready !</div>
            <div class="q-ml-sm" > {{ spectres.length + 1 }} player in the room </div>
          </template>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Quit room" color="primary"
            @click="quit()"/>
          <q-btn v-if="winner && isMaster" flat label="Start a new game!" color="primary"
            @click="this.$socket.emit('restart')"/>
          <q-btn v-if="!winner && isMaster" flat label="Start game!" color="primary"
            @click="this.$socket.emit('start')"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
export default {
  name: 'GameDialog',
  props: {
    isMaster: Boolean,
  },
  computed: {
    gameOn() {
      return this.$store.getters['game/getGameOn'];
    },
    show() {
      return !this.gameOn;
    },
    winner() {
      return this.$store.getters['game/getWinner'];
    },
    spectres() {
      return Object.keys(this.$store.getters['game/getSpectres']);
    },
  },
  methods: {
    quit() {
      this.$store.dispatch('game/quit');
      this.$store.dispatch('error/clear');
      this.$socket.emit('quit');
    },
  },
};
</script>

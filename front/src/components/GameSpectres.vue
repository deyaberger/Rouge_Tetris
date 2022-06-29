<template>
  <q-card class="row justify-start" flat>
    <div class="q-ma-sm"
      v-for="(tetris, player) in spectres" :key="'tetris' + player">
      {{ player }}
      <div v-for="(row, index) in tetris" :key="'row' + index"
        class="row">
        <div v-for="(col, index) in row" :key="'col' + index"
          class="col case" :class="getColor(col)"/>
      </div>
    </div>
  </q-card>
</template>

<style lang="sass" scoped>
.shadow
  background-color: $shadow
.blocked
  background-color: $blocked
.empty
  background-color: $empty
.turquoise
  background-color: $turquoise
.blue
  background-color: $blue
.orange
  background-color: $orange
.yellow
  background-color: $yellow
.green
  background-color: $green
.purple
  background-color: $purple
.red
  background-color: $red
.case
  max-width: 1.05vh
  max-height: 1.05vh
  width: 0.7vh
  height: 0.7vh
</style>

<script>
export default {
  name: 'GameSpectres',
  computed: {
    spectres() {
      return this.$store.getters['game/getSpectres'];
    },
  },
  methods: {
    getColor(value) {
      return {
        shadow: value === -2,
        blocked: value === -1,
        empty: value === 0,
        turquoise: value === 1,
        blue: value === 2,
        orange: value === 3,
        yellow: value === 4,
        green: value === 5,
        purple: value === 6,
        red: value === 7,
      };
    },
  },
};
</script>

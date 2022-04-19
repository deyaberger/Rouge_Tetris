<template>
  <q-card flat>
    <div v-for="(row, index) in tetris" :key="'row' + index"
      class="row justify-center">
      <div v-for="(col, index) in row" :key="'col' + index"
        class="col case" :class="getColor(col)"/>
    </div>
  </q-card>
</template>

<style lang="sass" scoped>
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
  max-width: 6vw
  max-height: 6vw
  border: solid 0.01vh white
  width: 4vh
  height: 4vh
</style>

<script>
export default {
  name: 'TetrisBoard',
  data() {
    return {
      game_on: true,
      room_name: '0001',
      player_name: 'Lewis',
      master: 'Lewis',
      winner: null,
      spectres: [],
      tetris: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 7, 7, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 7, 7, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 4, 4, 0, 0, 0, 6, 6, 6, 1],
        [2, 4, 4, 0, 0, 5, 5, 6, 3, 1],
        [2, 2, 2, 0, 5, 5, 3, 3, 3, 1],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
      ],
    };
  },
  mounted() {
    // this.initTetris(this.tetris);
  },
  methods: {
    initTetris(tetris) {
      // eslint-disable-next-line
      tetris = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];
    },
    getColor(value) {
      return {
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

// state : {
  //     'game_on' : this.game.on,
  //     'room_name' : this.name,
  //     'player_name' : player.name,
  //     'master' : this.master,
  //     'winner' : this.game.winner,
  //     'tetris' : player.tetris.get_state(),
  //     'spectres' : this.get_other_player_spectres(ID),
  //   }
  // const state = {
  //  "game_on" : boolean,
  //  "room_name" : str ("ma_chambre"),
  //  "player_name" : str ("deya"),
  //  "master" : str ("deya"),
  //  "winner" : null || str,
  //  "tetris" : 2D array,
  //  "spectres" : 2D array
  // }
  // 2D array for tetris:
  // size: (row, col) = (20, 10)
  // each value in array[i][j] indicates if there is a tetris or if it is empty or blocked
  // {
    // "blocked"    : -1,
    // "empty"      : 0,
    // "turquoise"  : 1,
    // "blue"       : 2,
    // "orange"     : 3,
    // "yellow"     : 4,
    // "green"      : 5,
    // "purple"     : 6,
    // "red"        : 7
  // }

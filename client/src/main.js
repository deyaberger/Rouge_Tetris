import { createApp } from 'vue'
import App from './App.vue'
import { io } from "socket.io-client";
import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
	state () {
		return {
		count: 0
		}
	},
	mutations: {
		increment (state) {
		state.count++
		}
	}
	})

const app = createApp(App);

app.mount('#app');

app.use(store);

store.commit('increment')

console.log(store.state.count) 

const socket = io("http://localhost:3000");

const msg = {
	"room_name" : "laplusbelle",
	"player_name" : "deya"
  }

socket.emit('join_room', msg);



console.log("hey");
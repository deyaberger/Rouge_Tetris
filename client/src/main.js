import { createApp } from 'vue'
import App from './App.vue'
import { io } from "socket.io-client";

createApp(App).mount('#app');

const socket = io("http://localhost:3000");

const msg = {
	"room_name" : "mynewroom",
	"player_name" : "deya"
  }

socket.emit('room', msg);

console.log("hey");
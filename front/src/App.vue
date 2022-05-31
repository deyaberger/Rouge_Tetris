<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  created() {
    this.$socket.on('disconnect', this.disconnect);
    this.$socket.on('connect_error', this.error);
    this.$socket.on('connect_failed', this.failed);
  },
  methods: {
    disconnect() {
      console.error('disconnect');
      this.$store.dispatch('game/quit');
      this.$store.dispatch('error/clear');
      this.$router.push('/');
    },
    error() {
      console.error('connect_error');
      this.$store.dispatch('game/quit');
      this.$store.dispatch('error/clear');
      this.$router.push('/error');
    },
    failed() {
      console.error('connect_failed');
      this.$store.dispatch('game/quit');
      this.$store.dispatch('error/clear');
      this.$router.push('/error');
    },
  },
});
</script>

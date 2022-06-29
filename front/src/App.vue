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
      this.$store.dispatch('game/quit');
      this.$store.dispatch('error/clear');
      this.$router.push('/');
    },
    error() {
      this.$store.dispatch('game/quit');
      this.$store.dispatch('error/clear');
      this.$router.push('/error');
    },
    failed() {
      this.$store.dispatch('game/quit');
      this.$store.dispatch('error/clear');
      this.$router.push('/error');
    },
  },
});
</script>

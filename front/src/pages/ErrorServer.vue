<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>

      <div class="text-h2" style="opacity:.4">
        Oops. Our server crashed :(
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorServer',
});
</script>

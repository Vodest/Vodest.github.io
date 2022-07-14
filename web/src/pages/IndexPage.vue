<template>
  <q-page class="flex flex-center">
    <img
      alt="Sigil"
      src="~assets/sigil_00.png"
      style="width: 200px; height: 200px"
    >
    <q-video
      :ratio="16/9"
      src="www.youtube.com/watch?v=Z4XGr63UFDo"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
});
</script>

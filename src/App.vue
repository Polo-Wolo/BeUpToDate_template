<template>
  <Preview></Preview>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent } from "vue"
import Preview from "./Preview.vue"


export default defineComponent({
  name: "App",
  components: {
    Preview,
  }
});
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
#app {
  @apply font-poppins;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  -moz-osx-font-smoothing: grayscale;
}

</style>

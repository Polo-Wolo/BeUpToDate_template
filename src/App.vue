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
.scroll-btn {
  @apply fixed bottom-4 right-4 flex items-center p-2 font-medium text-title-color hover:text-white bg-gray-200 rounded-3xl hover:bg-primary transition-all duration-75 ease-in-out;
}
</style>

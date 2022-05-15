<template>
  <button class="scroll-btn" @click="moveUp">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--fluent w-10       h-10     " preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
      <path fill="currentColor" d="M3.146 10.354a.5.5 0 0 0 .708 0L8 6.207l4.146 4.147a.5.5 0 0 0 .708-.708l-4.5-4.5a.5.5 0 0 0-.708 0l-4.5 4.5a.5.5 0 0 0 0 .708Z"></path>
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScollButton",
  methods:{
    moveUp() {
      window.scrollTo(0,0);
    }
  }
});
</script>

<style lang="scss" scoped>
.scroll-btn {
  @apply hidden animate-bounce fixed bottom-4 right-4 lg:flex items-center p-2 font-medium text-title-color hover:text-white bg-card-bg rounded-3xl hover:bg-primary transition-all duration-75 ease-in-out;
}
</style>

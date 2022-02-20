<template>
  <div class="relative mx-auto w-80 h-56  bg-cover bg-center bg-no-repeat bg-red-100 rounded-2xl flex" style="background-image: url(https://picsum.photos/300/200)">
    <div class="absolute right-1/2 transform translate-x-1/2 bottom-1/2 translate-y-1/2 font-bold text-white w-full text-center">
      This is my project Title
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectCard",
});
</script>

<style lang="scss" scoped>
.btn {
  @apply mx-auto flex items-center h-10 px-5 font-medium space-x-2 text-title-color group-hover:text-white bg-gray-200 rounded-lg group-hover:bg-primary transition-all duration-75 ease-in-out flex-none tracking-tight;
}
</style>

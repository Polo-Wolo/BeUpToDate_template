<template>
  <nav id="nav">
    <a href="" class="name">Paul</a>
    <div class="flex-grow"></div>
    <div class="link-table">
      <a href="" class="inline-flex items-center space-x-3 group">
        <span class="material-icons">home</span>
        <span class="font-bold underline decoration-4 underline-offset-4 decoration-primary group-hover:no-underline">Home</span>
      </a>
      <a href="#education">Education</a>
      <a href="#work-experience">Work Experience</a>
      <a href="#projects">Projects</a>
      <a href="#about-me">About Me</a>
    </div>
    <div class="flex-grow"></div>
    <SocialNetworkBar></SocialNetworkBar>
  </nav>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent } from "vue";
import SocialNetworkBar from "./SocialNetworkBar.vue";

export default defineComponent({
  name: "NavBar",
  components: {
    SocialNetworkBar: SocialNetworkBar,
  },
});
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style lang="scss" scoped>
#nav {
  @apply bg-nav-color border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-nav-color-dark shadow inline-flex w-full h-20;
  a {
    @apply rounded-lg hover:bg-section-title px-4 py-2;
  }
  .name {
    @apply self-center text-3xl font-bold whitespace-nowrap text-primary ml-36;
  }
  .link-table {
    @apply space-x-8 inline-flex items-center text-title-color text-lg tracking-tight;
    a {
      @apply hover:text-primary;
    }
  }
}
</style>

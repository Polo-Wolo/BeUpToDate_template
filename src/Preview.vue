<template class="relative" id="preview">
  <NavBar></NavBar>
  <router-view></router-view>
  <div class="mb-20 lg:mb-0"></div>
  <MobileNavBar></MobileNavBar>
  <ScrollButton></ScrollButton>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/navigation/NavBar.vue";
import MobileNavBar from "./components/navigation/MobileNavBar.vue";
import ScrollButton from "./components/utils/ScrollButton.vue";



export default defineComponent({
  name: "Preview",
  components: {
    NavBar,
    MobileNavBar,
    ScrollButton
  },
});
</script>

<style lang="scss">
.scroll-btn {
  @apply animate-bounce fixed bottom-4 right-4 flex items-center p-2 font-medium text-title-color hover:text-white bg-card-bg rounded-3xl hover:bg-primary transition-all duration-75 ease-in-out;
}
</style>

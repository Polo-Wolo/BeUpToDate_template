<template>
  <NavBar></NavBar>
  <!-- <Education></Education> -->
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import NavBar from "./components/NavBar.vue";
import Education from "./components/Education.vue";

export default defineComponent({
  name: "Education",
  components: {
    NavBar,
    Education,
  },
  computed: {
    ...mapGetters({
      educations: "educations",
    }),
  },
});
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
#app {
  @apply font-poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

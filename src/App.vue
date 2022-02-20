<template>
  <NavBar></NavBar>
  <CurriculumVitae></CurriculumVitae>
  <Education></Education>
  <WorkExperience></WorkExperience>
  <div class="mb-16 lg:mb-0"></div>
  <MobileNavBar></MobileNavBar>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/navigation/NavBar.vue";
import MobileNavBar from "./components/navigation/MobileNavBar.vue";
import Education from "./components/Education.vue";
import WorkExperience from "./components/WorkExperience.vue";
import CurriculumVitae from "./components/CurriculumVitae.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    MobileNavBar,
    Education,
    WorkExperience,
    CurriculumVitae,
  },
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

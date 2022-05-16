<template>
  <Education></Education>
  <WorkExperience></WorkExperience>
  <CurriculumVitae></CurriculumVitae>
  <Projects></Projects>
  <AboutMe></AboutMe>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Education from "../components/Education.vue";
import WorkExperience from "../components/WorkExperience.vue";
import CurriculumVitae from "../components/CurriculumVitae.vue";
import Projects from "../components/Projects.vue";
import AboutMe from "../components/AboutMe.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Education,
    WorkExperience,
    CurriculumVitae,
    Projects,
    AboutMe
  },
});
</script>

<style lang="scss" scoped></style>
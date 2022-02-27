<template>
  <div id="projects">
    <div class="section-title">
      <div>PRO</div>
      <div>jECTS</div>
    </div>
    <div class="w-full flex lg:justify-end lg:w-9/12 xl:w-7/12 justify-cente">
      <div class="grid gris-cols-1 md:grid-cols-2 lg:mx-12 w-full lg:w-auto">
        <ProjectCard class="justify-self-center"
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        >
        </ProjectCard>
      </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import ProjectCard from "../components/cards/ProjectCard.vue";

export default defineComponent({
  name: "Projects",
  components: {
    ProjectCard,
  },
  computed: {
    ...mapGetters({
      projects: "projects",
    }),
  },
});
</script>

<style lang="scss" scoped>
#projects {
  @apply lg:inline-flex w-full px-3 lg:px-0;
}
.section-title {
  @apply order-last justify-center lg:justify-start flex lg:block py-4 lg:py-0 lg:grow text-section-title text-5xl md:text-7xl xl:text-9xl 2xl:text-10xl font-bold lg:leading-16 xl:leading-24 2xl:leading-32 uppercase lg:pt-64 text-center lg:text-left;
}
</style>

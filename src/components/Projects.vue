<template>
  <div id="projects">
    <div class="w-full lg:w-9/12 xl:w-7/12 ">
      <div class="grid grid-cols-2 gap-x-4">
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

<style lang="scss" scoped></style>

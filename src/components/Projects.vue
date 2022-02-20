<template>
  <div class="grid grid-cols-3 gap-4">
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
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
});
</script>

<style lang="scss" scoped></style>

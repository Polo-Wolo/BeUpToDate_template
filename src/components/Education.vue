<template>
  <div id="#education">
    <EducationCard
      v-for="(education, index) in educations"
      :key="index"
      :education="education"
    >
    </EducationCard>
  </div>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import EducationCard from "../components/Cards/EducationCard.vue";

export default defineComponent({
  name: "Education",
  components: {
    EducationCard,
  },
  computed: {
    ...mapGetters({
      educations: "educations",
    }),
  },
});
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style lang="scss" scoped></style>

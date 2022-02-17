<template>
  <div id="education">
    <div class="section-title">
      <div>EDUCA</div>
      <div>TION</div>
    </div>
    <div class="w-full lg:w-9/12 xl:w-3/5">
      <!-- Dotted -->
      <div class="dotted-line">
        <div class ="timeline-card">
          <div class="fake-date"></div>
          <div class="fake-timeline">
            <div class="small-line"></div>
          </div>
          <div class="fake-card"></div>
        </div>
        <div class ="timeline-card">
          <div class="fake-date"></div>
          <div class="fake-timeline">
            <div class="medium-line"></div>
          </div>
          <div class="fake-card"></div>
        </div>
      </div>
      <!-- EducationCards -->
      <EducationCard
        v-for="(education, index) in educations"
        :first_item="index === 0"
        :last_item="index === educations.length - 1"
        :key="index"
        :education="education"
      >
      </EducationCard>
      <!-- Dotted -->
      <div class="dotted-line">
        <div class ="timeline-card">
          <div class="fake-date"></div>
          <div class="fake-timeline">
            <div class="medium-line"></div>
          </div>
          <div class="fake-card"></div>
        </div>
        <div class ="timeline-card">
          <div class="fake-date"></div>
          <div class="fake-timeline">
            <div class="small-line"></div>
          </div>
          <div class="fake-card"></div>
        </div>
      </div>
    </div>
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

<style lang="scss" scoped>
#education {
  @apply lg:inline-flex w-full px-3 lg:px-0;
}
.section-title {
  @apply py-4 lg:py-0 justify-center flex lg:block lg:flex-none lg:grow lg:text-right mx-auto text-section-title text-5xl md:text-7xl xl:text-9xl 2xl:text-10xl font-bold lg:leading-16 xl:leading-24 2xl:leading-32 uppercase lg:pt-64;
}
.dotted-line {
  @apply space-y-2 my-2;
  .timeline-card {
    @apply flex space-x-4 md:space-x-8 2xl:space-x-16;
    .fake-date {
      @apply w-36;
    }
    .fake-timeline {
      @apply relative w-6 md:w-3 lg:w-4 xl:w-5;
      .medium-line {
        @apply bg-primary w-1.5 lg:w-2 h-4 lg:h-5 rounded;
      }
      .small-line {
        @apply bg-primary w-1.5 lg:w-2 h-2 lg:h-3 rounded;
      }
    }
    .fake-card {
      @apply w-128 md:px-3 xl:px-4;
    }
  }
}
</style>

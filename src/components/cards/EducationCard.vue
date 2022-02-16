<template>
  <div class="timeline-card">
    <div class="date-card">
      <div class="lg:flex-grow"></div>
      <div class="date">{{ education.location }}</div>
      <div class="date">{{ education.date }}</div>
    </div>
    <div class="circle"></div>
    <div class="box">
      <div class="header" :class="backgroundColorClass">
        <div class="title">{{ education.title }}</div>
      </div>
      <div class="content">
        <p v-for="(paragraph, index) in education.content" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Education } from "../../models";

export default defineComponent({
  name: "EducationCard",
  props: {
    education: {
      type: Object as PropType<Education>,
      required: true,
    },
  },
  computed: {
    backgroundColorClass: function () {
      switch (this.education.type) {
        case "":
          return "";

        case "volunteering":
          return "";

        default:
          return "";
      }
    },
  },
});
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style lang="scss" scoped>
.timeline-card {
  @apply mb-8 flex justify-between space-y-4 w-full;
  .date-card {
    @apply order-2 md:order-1 lg:w-5/12 w-1/6 flex items-start;
    .date {
      @apply text-white py-5 text-xs lg:text-base font-medium;
    }
  }
  .circle {
    @apply z-20 flex items-center order-1 bg-title-color border-2 shadow-lg w-6 h-6 xl:w-8 xl:h-8 rounded-full;
  }
  .box {
    @apply order-2 md:order-1 w-2/3 lg:w-5/12 rounded-lg border-2 border-white;
    .header {
      @apply rounded-t-md shadow-lg text-xs lg:text-sm xl:text-lg py-1 md:py-2 px-3 md:px-5 xl:px-6 items-center;
      .title {
        @apply text-left text-white font-medium;
      }
    }
    .content {
      @apply bg-white px-3 md:px-3 py-2 md:py-2 xl:px-4 xl:py-3 text-xs xl:text-base text-justify md:leading-relaxed tracking-wide text-title-color;
    }
  }
}
</style>

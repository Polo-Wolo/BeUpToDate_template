<template>
  <div class="flex space-x-16">
    <!-- Date -->
    <div class="w-96 pt-14 font-bold text-md text-title-color text-right">{{ education.date }}</div>
    <!-- Line -->
    <div class="relative w-9">
      <div class="w-7 h-7 bg-primary rounded-full top-14 absolute -left-1/2"></div>
      <div class="bg-primary w-2 h-full absolute" :class="{'rounded-t-full': first_item, 'rounded-b-full' : last_item}"></div>
    </div>
    <!-- Card -->
    <div class="bg-card-bg rounded-2xl px-4 py-4 flex-col space-y-3 my-4 w-full">
      <div class="flex space-x-5">
        <div class="w-12 h-12 rounded-full bg-primary justify-center inline-flex items-center text-white">
          <svg v-if="education.type === ''" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--mdi w-6 h-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82 6L12 12.72L5.18 9L12 5.28L18.82 9M17 16l-5 2.72L7 16v-3.73L12 15l5-2.73V16z" fill="currentColor"></path></svg>
          <svg  v-else-if="education.type === 'volunteering'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--mdi w-5 h-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M16 3.23C16.71 2.41 17.61 2 18.7 2c.91 0 1.67.33 2.3 1c.63.67.96 1.43 1 2.3c0 .7-.33 1.51-1 2.46s-1.32 1.74-1.97 2.39c-.65.64-1.66 1.59-3.03 2.85c-1.39-1.26-2.41-2.21-3.06-2.85s-1.31-1.44-1.97-2.39C10.31 6.81 10 6 10 5.3c0-.91.32-1.67.97-2.3c.65-.63 1.43-.96 2.34-1c1.07 0 1.96.41 2.69 1.23M22 19v1l-8 2.5l-7-1.94V22H1V11h7.97l6.16 2.3A2.89 2.89 0 0 1 17 16h2c1.66 0 3 1.34 3 3M5 20v-7H3v7h2m14.9-1.43c-.16-.33-.51-.57-.9-.57h-5.35c-.54 0-1.07-.08-1.58-.25l-2.38-.79l.63-1.9l2.38.79c.3.1 2.3.15 2.3.15c0-.37-.23-.7-.57-.83L8.61 13H7v5.5l6.97 1.91l5.93-1.84z" stroke="none" fill="currentColor"></path></svg>
        </div>
        <div class="grow text-title-color items-center flex-col">
          <div class="font-bold text-lg">{{ education.title }}</div>
          <div class="font-semibold">{{ education.location }}</div>
        </div>
      </div>
      <div class="text-content-color text-base px-3">
        <p v-for="(paragraph, index) in education.content" :key="index">{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ED } from "../../models";

export default defineComponent({
  name: "EducationCard",
  props: {
    education: {
      type: Object as PropType<ED>,
      required: true,
    },
    first_item: {
      type: Boolean,
      required: true,
    },
    last_item: {
      type: Boolean,
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

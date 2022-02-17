<template>
  <div class="timeline-card">
    <!-- Date -->
    <div class="date">{{ education.date }}</div>
    <!-- Line -->
    <div class="timeline">
      <div class="circle"></div>
      <div class="line" :class="{'rounded-t-full': first_item, 'rounded-b-full': last_item}"></div>
    </div>
    <!-- Card -->
    <div class="card" :class="{'mb-4': first_item, 'mt-4':last_item, 'my-4': !first_item && !last_item}">
      <div class="flex space-x-3 xl:space-x-4">
        <div class="circle-icon">
          <svg v-if="education.type === ''" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--mdi w-6 h-6" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3m6.82 6L12 12.72L5.18 9L12 5.28L18.82 9M17 16l-5 2.72L7 16v-3.73L12 15l5-2.73V16z" fill="currentColor"></path></svg>
          <svg  v-else-if="education.type === 'volunteering'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--mdi w-5 h-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M16 3.23C16.71 2.41 17.61 2 18.7 2c.91 0 1.67.33 2.3 1c.63.67.96 1.43 1 2.3c0 .7-.33 1.51-1 2.46s-1.32 1.74-1.97 2.39c-.65.64-1.66 1.59-3.03 2.85c-1.39-1.26-2.41-2.21-3.06-2.85s-1.31-1.44-1.97-2.39C10.31 6.81 10 6 10 5.3c0-.91.32-1.67.97-2.3c.65-.63 1.43-.96 2.34-1c1.07 0 1.96.41 2.69 1.23M22 19v1l-8 2.5l-7-1.94V22H1V11h7.97l6.16 2.3A2.89 2.89 0 0 1 17 16h2c1.66 0 3 1.34 3 3M5 20v-7H3v7h2m14.9-1.43c-.16-.33-.51-.57-.9-.57h-5.35c-.54 0-1.07-.08-1.58-.25l-2.38-.79l.63-1.9l2.38.79c.3.1 2.3.15 2.3.15c0-.37-.23-.7-.57-.83L8.61 13H7v5.5l6.97 1.91l5.93-1.84z" stroke="none" fill="currentColor"></path></svg>
        </div>
        <!-- Card Header -->
        <div class="card-header">
          <div class="title">{{ education.title }}</div>
          <div class="location">{{ education.location }}</div>
        </div>
      </div>
      <!-- Content -->
      <div class="content">
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
});
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style lang="scss" scoped>
.timeline-card {
  @apply flex space-x-4 md:space-x-8 2xl:space-x-16;
  .date {
    @apply w-36 pt-12 font-bold text-xs md:text-sm 2xl:text-base text-title-color text-right;
  }
  .timeline {
    @apply relative w-6 md:w-3 lg:w-4 xl:w-5;
    .circle {
      @apply w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 bg-primary rounded-full top-11 absolute -left-1/2;
    }
    .line {
      @apply bg-primary w-1.5 lg:w-2 h-full absolute;
    }
  }
  .card {
    @apply bg-card-bg rounded md:rounded-2xl py-2 md:px-3 md:py-3 xl:px-4 xl:py-4 flex-col space-y-2 md:space-y-3 w-128;
    .circle-icon {
      @apply hidden md:inline-flex w-11 h-11 rounded-full bg-primary justify-center items-center text-white flex-none;
    }
    .card-header {
      @apply grow text-title-color items-center flex-col;
      .title {
        @apply font-bold text-xs md:text-sm;
      }
      .location {
        @apply font-semibold text-xs md:text-sm;
      }
    }
    .content {
      @apply text-content-color text-xs md:text-sm px-3 text-justify;
    }
  }
}
</style>

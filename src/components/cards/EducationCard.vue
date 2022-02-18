<template>
  <div class="timeline-card">
    <!-- Date -->
    <div class="date" :class="{'pt-7': first_item, 'pt-12': !first_item}">{{ education.date }}</div>
    <!-- Line -->
    <div class="timeline">
      <div class="circle" :class="{'top-7': first_item, 'top-11': !first_item}"></div>
      <div class="line" :class="{'rounded-t-full': first_item, 'rounded-b-full': last_item}"></div>
    </div>
    <!-- Card -->
    <div class="card" :class="{'mb-4': first_item, 'mt-4':last_item, 'my-4': !first_item && !last_item}">
      <div class="flex md:space-x-3 xl:space-x-4">
        <div class="circle-icon">
          <svg v-if="education.type === ''" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--fa-solid w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="currentColor" d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87c.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47l-145.03 44.56z"></path></svg>
          <svg v-else-if="education.type === 'volunteering'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--fa-solid w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="currentColor" d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8c-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6c3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"></path></svg>
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
import { Education } from "../../models";

export default defineComponent({
  name: "EducationCard",
  props: {
    education: {
      type: Object as PropType<Education>,
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
    @apply w-24 md:w-32 font-bold text-xs md:text-sm 2xl:text-base text-title-color text-center md:text-right;
  }
  .timeline {
    @apply relative w-6 md:w-3.5 lg:w-4 xl:w-5;
    .circle {
      @apply w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 bg-primary rounded-full absolute -left-1/2;
    }
    .line {
      @apply bg-primary w-1.5 lg:w-2 h-full absolute;
    }
  }
  .card {
    @apply bg-card-bg rounded md:rounded-2xl py-2 md:px-3 md:py-3 xl:px-4 xl:py-4 flex-col space-y-1 md:space-y-3 w-128;
    .circle-icon {
      @apply hidden md:inline-flex w-11 h-11 rounded-full bg-primary justify-center items-center text-white flex-none;
    }
    .card-header {
      @apply grow text-title-color items-center flex-col my-auto px-3;
      .title {
        @apply font-bold text-xs md:text-sm tracking-tight;
      }
      .location {
        @apply hidden md:block font-semibold text-xs md:text-sm tracking-tight;
      }
    }
    .content {
      @apply text-content-color text-xs md:text-sm px-3 text-justify tracking-tight;
    }
  }
}
</style>

<template>
    <div class="w-1/2 my-20 mx-auto">
      <div class="title">
        This is your project title
      </div>
      <div class="details-bar">
        <div class="inline-flex w-full">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent w-7 h-7" viewBox="0 0 16 16"><path fill="currentColor" d="M5.248 8.997a.748.748 0 1 0 0-1.497a.748.748 0 0 0 0 1.497Zm.749 1.752a.748.748 0 1 1-1.497 0a.748.748 0 0 1 1.497 0ZM8 8.996A.748.748 0 1 0 8 7.5a.748.748 0 0 0 0 1.497Zm.749 1.752a.748.748 0 1 1-1.497 0a.748.748 0 0 1 1.497 0Zm2-1.752a.748.748 0 1 0 0-1.497a.748.748 0 0 0 0 1.497ZM14 4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7ZM3 6h10v5.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5V6Zm1.5-3h7A1.5 1.5 0 0 1 13 4.5V5H3v-.5A1.5 1.5 0 0 1 4.5 3Z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent w-7 h-7" viewBox="0 0 16 16"><path fill="currentColor" d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3Zm-.498 2a.5.5 0 0 1 .491.41l.009.09V8H9.5a.5.5 0 0 1 .09.992L9.5 9H7.502a.5.5 0 0 1-.492-.41l-.008-.09v-3a.5.5 0 0 1 .5-.5Z"></path></svg>
          <div class="flex-grow"></div>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fluent w-7 h-7" viewBox="0 0 16 16"><path fill="currentColor" d="M11 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-8.413 4.136a1.988 1.988 0 0 1 0-2.822l4.74-4.716a2.01 2.01 0 0 1 1.41-.584L11.986 2A2 2 0 0 1 14 4.01l-.024 3.362a1.99 1.99 0 0 1-.588 1.397l-4.67 4.647a2.012 2.012 0 0 1-2.835 0l-3.296-3.28Zm.709-2.116a.994.994 0 0 0 0 1.41l3.296 3.28c.392.39 1.026.39 1.418 0l4.67-4.647a.995.995 0 0 0 .293-.698l.024-3.363a1 1 0 0 0-1.006-1.004l-3.25.013a1.005 1.005 0 0 0-.705.292L3.296 8.02Z"></path></svg>
        </div>
      </div>
      <Carousel :itemsToShow="3" :wrapAround="true" :autoplay="4000" :transition="500">
          <Slide v-for="slide in 4" :key="slide">
              <div class="carousel__item">{{ slide }}</div>
          </Slide>

          <template #addons>
              <Navigation class="bg-green-500 border-white" />
          </template>
      </Carousel>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Navigation,
    Slide,
  },
});
</script>

<style lang="scss" scoped>
.carousel__item {
  min-height: 175px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  @apply py-24;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
.carousel__slide > .carousel__item {
  transform: scale(0.9);
  opacity: 1;
  transition: 0.3s;
  @apply brightness-50;
}
.carousel__slide--visible > .carousel__item {
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.75);
  @apply brightness-100 z-50;
}

.title {
  @apply text-title-color font-bold text-3xl;
}
.details-bar {
  @apply text-title-color;
}
</style>

<!--
<template>
    <span>Project View</span>
</template>

<script lang="ts"></script>

<style lang="scss" scoped></style>
-->
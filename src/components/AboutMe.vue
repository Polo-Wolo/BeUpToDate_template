<template>
    
    <div class="flex flex-col items-center w-full sm:max-w-xs md:max-w-lg p-4 bg-card-bg rounded-lg md:rounded-2xl md:flex-row shadow-lg mx-auto my-24">
        <div class="-mt-28 md:-my-16 md:-ml-32 transform rotate-90" style="clip-path: url(#roundedPolygon)">
            <img
                class="w-auto h-52 transform -rotate-90"
                src="https://thispersondoesnotexist.com/image"
                alt="Paul Walczak"
            />
        </div>
        <div class="flex flex-col space-y-6 flex-grow px-6">
            <div class="flex flex-col items-center md:items-start">
                <h2 class="text-xl font-bold text-title-color">Paul Walczak</h2>
                <p class="text-base font-medium text-content-color">Engineering Student</p>
            </div>
            <div>
            </div>
        </div>
    </div>


    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <defs>
        <!-- rounded polygon generator => https://weareoutman.github.io/rounded-polygon/ -->
        <!-- polygon size 190 * 190 almost the same size as the image -->
        <clipPath id="roundedPolygon">
            <path d="M91.5 5.5829037686548a28 28 0 0 1 28 0l65.530743608719 37.83419246269a28 28 0 0 1 14 24.248711305964l0 75.668384925381a28 28 0 0 1 -14 24.248711305964l-65.530743608719 37.83419246269a28 28 0 0 1 -28 0l-65.530743608719 -37.834192462691a28 28 0 0 1 -14 -24.248711305964l1.2051399627924e-13 -75.668384925381a28 28 0 0 1 14 -24.248711305964"
            />
        </clipPath>
        </defs>
    </svg>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMe",
});
</script>

<style lang="scss">
    
</style>
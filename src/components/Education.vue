<template>
  <div id="education" class="inline-flex w-full">
    <div class="grow text-right mx-28 text-section-title text-9xl font-bold uppercase pt-64">
      <p>EDUCA</p>
      <p>TION</p>
    </div>
    <div class="w-1/2 mr-36">
      <!-- Dotted -->
      <div class="space-y-2 my-2">
        <div class="flex space-x-16">
          <div class="w-96"></div>
          <div class="relative w-9">
            <div class="bg-primary w-2 h-3 rounded"></div>
          </div>
          <div class="w-full px-4"></div>
        </div>
        <div class="flex space-x-16">
          <div class="w-96"></div>
          <div class="relative w-9">
            <div class="bg-primary w-2 h-5 rounded"></div>
          </div>
          <div class="w-full px-4"></div>
        </div>
      </div>
      <!-- EducationCards -->
      <EducationCard
        v-for="(education, index) in educations"
        :first_item="index===0"
        :last_item="index===educations.length-1"
        :key="index"
        :education="education"
      >
      </EducationCard>
      <!-- Dotted -->
      <div class="space-y-2 my-2">
        <div class="flex space-x-16">
          <div class="w-96"></div>
          <div class="relative w-9">
            <div class="bg-primary w-2 h-5 rounded"></div>
          </div>
          <div class="w-full px-4"></div>
        </div>
        <div class="flex space-x-16">
          <div class="w-96"></div>
          <div class="relative w-9">
            <div class="bg-primary w-2 h-3 rounded"></div>
          </div>
          <div class="w-full px-4"></div>
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
</style>

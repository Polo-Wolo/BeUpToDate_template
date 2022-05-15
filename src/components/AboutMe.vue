<template>
  <div id="about-me">
    <div class="section-title">
      <div>ABOUT</div>
      <div>ME</div>
    </div>
    <div class="main-div">
      <div class="picture" :style="{ backgroundImage: 'url(' + infos.profile_picture_url + ')'}"></div>
      <div class="grow justify-center flex-col space-y-4 xl:space-y-7 pt-2">
        <div class="title-name">{{infos.first_name + ' ' + infos.last_name}}</div>
        <div class="card">
          <div class="content">
            <p>Email :</p>
            <p>Adress :</p>
            <p>City :</p>
            <p>Zip Code :</p>
            <p>Phone :</p>
            <p>Licence :</p>
          </div>
          <div class="flex-grow space-y-6">
            <p class="underline">{{ infos.email }}</p>
            <p>{{ infos.adress }}</p>
            <p>{{ infos.city }}</p>
            <p>{{ infos.zip }}</p>
            <p class="underline">{{ infos.phone }}</p>
            <p>{{ infos.licence }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "AboutMe",
  computed: {
    ...mapGetters({
      infos: "infos",
    }),
  },
});
</script>

<style lang="scss">
#about-me {
  @apply lg:inline-flex w-full px-3 lg:px-0 items-center md:my-8;
  .section-title {
    @apply py-4 lg:py-0 flex justify-center space-x-3 md:space-x-6 lg:flex-col lg:grow lg:text-right mx-auto text-section-title text-5xl md:text-7xl xl:text-9xl 2xl:text-10xl font-bold lg:leading-16 xl:leading-24 2xl:leading-32 uppercase;
  }
  .main-div {
    @apply block md:inline-flex md:space-x-8 lg:space-x-10 xl:space-x-12 mt-2.5 w-full lg:w-9/12 xl:w-7/12 justify-center px-2 md:px-8 lg:px-10 xl:px-20;
    .picture {
      @apply w-full h-32 md:h-auto bg-cover bg-center bg-no-repeat rounded-2xl flex md:w-1/4 justify-center;
    }
    .title-name {
      @apply text-title-color font-bold md:ml-2 text-3xl text-center md:text-left;
    }
    .card {
      @apply flex rounded-2xl bg-card-bg p-6;
    }
    .content {
      @apply flex-grow space-y-6 text-title-color font-bold;
    }
  }
}
</style>

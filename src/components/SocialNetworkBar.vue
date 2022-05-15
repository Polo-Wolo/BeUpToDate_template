<template>
  <div class="inline-flex space-x-1 items-center mx-4">
    <a target="_blank" v-if="infos.discord" :href="infos.discord">
      <box-icon class="icon" type="logo" name="discord"></box-icon>
    </a>
    <a target="_blank" v-if="infos.facebook" :href="infos.facebook">
      <box-icon class="icon" type="logo" name="facebook-circle"></box-icon>
    </a>
    <a target="_blank" v-if="infos.github" :href="infos.github">
      <box-icon class="icon" type="logo" name="github"></box-icon>
    </a>
    <a target="_blank" v-if="infos.linkedin" :href="infos.linkedin">
      <box-icon class="icon" type="logo" name="linkedin"></box-icon>
    </a>
    <a target="_blank" v-if="infos.instagram" :href="infos.instagram">
      <box-icon class="icon" type="logo" name="instagram-alt"></box-icon>
    </a>
  </div>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "SocialNetworkBar",
  computed: {
    ...mapGetters({
      infos: "infos",
    }),
  },
});
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style lang="scss" scoped>
.icon{
  @apply fill-title-color hover:fill-primary rounded-lg hover:bg-section-title px-1 py-1 w-7 h-7 xl:w-8 xl:h-8;
}
</style>

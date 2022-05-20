<template>
  <!-- <p>{{projects}}</p> -->
  <div class="flex">
      <div class="w-full max-w-1/4">
        <Content/>
      </div>
      <div>
        <Preview />
      </div>
    </div>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent } from "vue"
import Preview from "./Preview.vue"
import Content from "./components/Form/Content.vue";
import ProjectsVue from "./components/Projects.vue";

import { mapGetters } from "vuex";

import { useStore } from 'vuex'
import { bindings } from "@formkit/vue";

import { mapActions } from 'vuex'
import store from "./store";

export default defineComponent({
  name: "App",
  components: {
    Preview,
    Content
  },
  computed: {
    projects () {
      return store.state.projects;
    }
  },
});
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
#app {
  @apply font-poppins;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  -moz-osx-font-smoothing: grayscale;
}

</style>

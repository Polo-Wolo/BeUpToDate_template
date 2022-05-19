<template>
  <p>{{projects}}</p>
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
// import { key } from './store'




export default defineComponent({
  // setup(){
  //   const store=useStore();
  // },
  name: "App",
  components: {
    Preview,
    Content
  },
  // setup () {
  //   const store = useStore(key)

  //   store.state.count // typed as number
  // },
  computed: {
    // ...mapGetters({
    //   projects: "projects",
    // }),
    projects () {
      return store.state.projects;
    }
  },  
  mounted() {
    this.eventBus.on("send_data", (projects_in) => {
      console.log("projects_in");
      console.log(projects_in);
      //console.log(store.state.projects);
      //store.state.projects=projects_in // typed as number
      //alert(args);
      // console.log("args");
      // console.log(args);
      console.log("projects");
      console.log(this.projects);
      //this.projects=projects_in;
      store.commit("SET_PROJECTS", projects_in);

      console.log("projects");
      console.log(this.projects);      
    });
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

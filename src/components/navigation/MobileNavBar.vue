<template>
  <div v-click-outside="onClickOutside">
    <div class="mobile-nav">
      <a href="nav" class="name">Paul</a>
      <div class="flex-grow"></div>
      <div class="actualPage text-sm text-title-color justify-center">
	  	<a href="nav">Nav</a>
        <a href="education">Education</a>
        <a href="workexperiences">Work experience</a>
        <a href="projects">Projects</a>
        <a href="aboutme">About Me</a>
      </div>
      <div class="flex-grow"></div>
      <button :class="{'bg-section-title' : display}" class="focus:outline-none ml-5 text-title-color px-2 py-2 rounded-lg" @click="toggleDisplay">
        <svg v-if="!display" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="iconify iconify--heroicons-outline h-7 w-7" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
          <g fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
        <svg v-if="display" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div :class="display ? 'fixed' : '-translate-y-full absolute'" class="nav-list transform duration-300 ease-in-out py-4 -z-10 text-sm texttitle-color font-light flex flex-col leading-relaxed space-y-2 justify-center w-full bg-nav-color inset-x-0 shadow-md">
      <a @click="toggleDisplay" href="">Home</a>
      <a @click="toggleDisplay" href="education">Education</a>
      <a @click="toggleDisplay" href="workexperiences">Work experiences</a>
      <a @click="toggleDisplay" href="projects">Projects</a>
      <a @click="toggleDisplay" href="contact">Contact</a>
    </div>
  </div>
</template>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<script lang="ts">
import { defineComponent } from "vue";
import vClickOutside from 'click-outside-vue3'

export default defineComponent({
  name: "MobileNavBar",
  data() {
    return {
      display: false,
    };
  },
  methods: {
    toggleDisplay: function () {
      this.display = !this.display;
    },
    onClickOutside: function () {
      this.display = false;
    },
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
});
</script>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style scoped lang="scss">
.mobile-nav {
  @apply z-50 lg:hidden w-full top-0 fixed h-14 px-5 md:px-8 items-center flex bg-nav-color shadow mb-4;
  a {
	  @apply rounded hover:bg-section-title px-4 py-2;
  }
  .name {
    @apply self-center text-2xl font-bold whitespace-nowrap text-primary;
  }
}

.nav-list {
  @apply rounded-b z-40 items-center lg:hidden;
  a {
    @apply flex-none focus:outline-none;
    &.router-link-active {
      @apply bg-purple-200 block rounded-full;
    }
  }
}

.actualPage {
  a {
    @apply hidden flex-none focus:outline-none;
    :active {
    	@apply bg-red-500;
	}
  }
}
</style>

<template>
  <div class="container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <FormKit
      type="button"
      label="Cacher/Montrer les champs"
      @click="toggleContent()"
    />
    <div class="content" v-show="show_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapsable",
  components: {},
  data() {
    return {
      show_content: true,
    };
  },
  methods: {
    toggleContent() {
      console.log("toggleContent");
      this.show_content = !this.show_content;
    },
  },
};
</script>
<style src="./style.css"/>
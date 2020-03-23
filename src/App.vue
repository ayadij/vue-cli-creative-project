<template>
  <div>
    <comp-header />
    <div class="container"></div>
    <div>
      <comp-featured />
      <router-view />
    </div>
    <comp-footer />
  </div>
</template>

<script>
import compHeader from "./components/Header.vue";
import compFooter from "./components/Footer.vue";
import compFeatured from "./components/Featured/index.vue";

export default {
  components: {
    compHeader,
    compFooter,
    compFeatured
  }
};
</script>

<style>
@import "./assets/style.css";
</style>

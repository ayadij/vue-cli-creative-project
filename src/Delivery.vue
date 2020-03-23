<template>
  <div>
    <appHeader />
    <div>
      <appFeatured />
      <appCallUs />
    </div>
    <appFooter />
  </div>
</template>

<script>
import appHeader from "./components/Header.vue";
import appFooter from "./components/Footer.vue";
import appFeatured from "./components/Featured/index.vue";
import appCallUs from "./components/CallUs/index.vue";

export default {
  components: {
    appHeader,
    appFooter,
    appFeatured,
    appCallUs
  }
};
</script>

<style>
@import "./assets/style.css";
</style>

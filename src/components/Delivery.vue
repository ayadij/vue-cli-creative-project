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
import appHeader from "./Header.vue";
import appFooter from "./Footer.vue";
import appFeatured from "./Featured/index.vue";
import appCallUs from "./CallUs/index.vue";

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
@import "../assets/style.css";
</style>

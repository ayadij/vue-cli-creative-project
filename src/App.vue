<template>
  <div>
    <appHeader />
    <div>
      <appFeatured />
    </div>
    <appFooter />
  </div>
</template>

<script>
import appHeader from "./components/Header.vue";
import appFooter from "./components/Footer.vue";
import appFeatured from "./components/Featured/index.vue";

export default {
  components: {
    appHeader,
    appFooter,
    appFeatured
  }
};
</script>

<style>
@import "./assets/style.css";
</style>

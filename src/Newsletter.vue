<template>
  <div>
    <appHeader />
    <div>
      <appFeatured />
      <appNewsletter />
    </div>
    <appFooter />
  </div>
</template>

<script>
import appHeader from "./components/Header.vue";
import appFooter from "./components/Footer.vue";
import appFeatured from "./components/Featured/index.vue";
import appNewsletter from ".components/Newsletter/index.vue";

export default {
  components: {
    appHeader,
    appFooter,
    appFeatured,
    appNewsletter
  }
};
</script>

<style>
@import "./assets/style.css";
</style>

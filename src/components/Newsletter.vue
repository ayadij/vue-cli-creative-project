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
import appHeader from "./Header.vue";
import appFooter from "./Footer.vue";
import appFeatured from "./Featured/index.vue";
import appNewsletter from "./Newsletter/index.vue";

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
@import "../assets/style.css";
</style>

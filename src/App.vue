<template>
  <div>
    <appHeader />
    <div>
      <appFeatured />
      <appMenu />
    </div>
    <appFooter />
  </div>
</template>

<script>
import appHeader from "./components/Header.vue";
import appFooter from "./components/Footer.vue";
import appFeatured from "./components/Featured/index.vue";
import appMenu from "./components/Menu/index.vue";

export default {
  components: {
    appHeader,
    appFooter,
    appFeatured,
    appMenu
  }
};
</script>

<style>
@import "./assets/style.css";
</style>

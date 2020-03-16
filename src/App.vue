<template>
  <div>
    <appHeader />
    <div>app content</div>
    <appFooter />
  </div>
</template>

<script>
import appHeader from "./components/Header.vue";
import appFooter from "./components/Footer.vue";

export default {
  components: {
    appHeader,
    appFooter
  }
};
</script>

<style>
@import "./assets/style.css";
</style>

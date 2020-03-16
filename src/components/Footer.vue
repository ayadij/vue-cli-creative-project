<template>
  <footer>
    <div class="container">
      <div>
        <img :src="logoIcon" />
        <div class="contact">
          <div>Github Link:</div>
          <div>https://github.com/ayadij/vue-cli-creative-project</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "../assets/images/logo.png";

export default {
  data() {
    return {
      logoIcon: Logo
    };
  }
};
</script>

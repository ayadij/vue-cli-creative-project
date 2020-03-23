<template>
  <footer>
    <div class="container">
      <div>
        <img :src="logoIcon" />
        <div class="contact">
          <div>
            <a
              class="github-link"
              target="_blank"
              href="https://github.com/ayadij/vue-cli-creative-project"
              >Github Link</a
            >
            <div style="font-size:.7em">aya dijkwel & moa dijkwel</div>
          </div>
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

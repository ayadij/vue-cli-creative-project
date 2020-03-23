<template>
  <header>
    <div class="container clear">
      <div class="logo">
        <img :src="logoIcon" />
      </div>
      <div class="nav">
        <img :src="menuIcon" @click="showSidepanel = !showSidepanel" />
      </div>
      <md-drawer
        class="side-drawer"
        :md-right="true"
        :md-active.sync="showSidepanel"
      >
        <ul class="drawer-list">
          <li class="drawer-list-li">
            <span class="li-text"><a href="/">&#2039; Home</a></span>
          </li>

          <li class="drawer-list-li">
            <span class="li-text"
              ><a href="#/delivery">&#2039; Delivery</a></span
            >
          </li>

          <li class="drawer-list-li">
            <span class="li-text"
              ><a href="#/newsletter">&#2039; Newsletter</a></span
            >
          </li>
        </ul>
      </md-drawer>
    </div>
  </header>
</template>

<script>
import Logo from "../assets/images/logo.png";
import Menu from "../assets/images/menu.png";

export default {
  data() {
    return {
      logoIcon: Logo,
      menuIcon: Menu,
      showSidepanel: false
    };
  }
};
</script>

<style scoped>
.drawer-list {
  padding: 40px;
  list-style: none;
}
.drawer-list-li {
  padding: 40px;
}
.li-text {
  font-size: 2em;
}
</style>

<template>
  <div class="anim_container">
    <div class="icon icon_delivery" left="900"></div>
  </div>
</template>

<script>
// export default {
//   methods: {
//     beforeEnter(el) {
//       el.style.left = "-200px";
//       el.style.opacity = 0;
//     },
//     enter(el, done) {
//       let delay = parseInt(el.getAttribute("delay"));
//       let left = parseInt(el.getAttribute("left"));

//       Velocity(
//         el,
//         { opacity: 1, left },
//         { delay, duration: 500, complete: done }
//       );
//     }
//   }
// };
</script>

<style>
.anim_container {
  position: relative;
  height: 200px;
}

.icon {
  background-size: cover !important;
  position: relative;
}

.plus {
  position: absolute;
  font-size: 160px;
  color: #ffffff;
  top: 90px;
}

.icon_phone {
  background: url("../../assets/images/icons/icon-phone.png");
  width: 130px;
  height: 130px;
  top: 30px;
}

.icon_delivery {
  background: url("../../assets/images/icons/icon-delivery.png");
  width: 200px;
  height: 200px;
}

.icon_pizza {
  background: url("../../assets/images/icons/icon-pizza.png");
  width: 200px;
  height: 200px;
}
</style>

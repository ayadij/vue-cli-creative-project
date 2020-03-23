<template>
  <div>
    <carousel :per-page="1" :mouse-drag="true" :loop="true">
      <slide v-for="(slide, index) in slides" :key="index">
        <div class="slider_bck" :style="{ background: `url(${slide.bck})` }">
          <div class="container slider-container">
            <div class="text">
              <div>{{ slide.text }}</div>
            </div>
            <div class="image">
              <img :src="slide.img" />
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import slideBck from "../../assets/images/slide_bck.png";
import slideBck2 from "../../assets/images/slide_bck2.png";
import corona from "../../assets/images/corona.png";
import lilcorona from "../../assets/images/lilcorona.png";

export default {
  data() {
    return {
      slides: [
        {
          bck: slideBck2,
          img: lilcorona
        },
        {
          text: "Protect yourself and others from coronavirus",
          bck: slideBck,
          img: corona
        }
      ]
    };
  },
  components: {
    Carousel,
    Slide
  }
};
</script>

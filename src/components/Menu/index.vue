<template>
  <div class="container menu_container">
    <div class="top" v-scroll-reveal.reset>
      <h2>What You Need to Know</h2>
    </div>
    <div class="buttons" v-scroll-reveal.reset="{ delay: 250 }">
      <md-button
        v-for="(button, index) in buttons"
        :key="index"
        @click="changeMenu(button.name)"
        :class="button.active ? 'md-raised' : ''"
      >
        {{ button.name }}
      </md-button>
    </div>
    <div class="products_items" v-scroll-reveal.reset="{ delay: 500 }">
      <md-card
        v-for="(product, index) in products"
        :key="index"
        v-show="product.type === activeProduct"
      >
        <md-card-media md-ratio="16:9">
          <img :src="require(`../../assets/images/products/${product.img}`)" />
        </md-card-media>

        <md-card-header>
          <h2 class="md-title"></h2>
          <div class="md-subhead">
            <span>&#128338; {{ product.price }}</span>
          </div>
          <strong>{{ product.name }}</strong>
        </md-card-header>

        <md-card-content>
          {{ product.desc }}
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { name: "news", active: true }, //news
        { name: "resources", active: false }, // resources
        { name: "tips", active: false }, // tips
        { name: "updates", active: false } // updates
      ],
      activeProduct: "news",
      products: []
    };
  },
  methods: {
    changeMenu(value) {
      this.buttons.forEach(item => {
        if (item.name == value) {
          item.active = true;
          this.activeProduct = value;
        } else {
          item.active = false;
        }
      });
    }
  },
  created() {
    this.$http
      .get("products.json")
      .then(response => response.json())
      .then(data => {
        let list = [];
        for (let key in data) {
          list.push({
            ...data[key],
            id: key
          });
        }
        this.products = list;
      });
  }
};
</script>

<style scoped>
.md-card {
  width: 32%;
  margin-bottom: 20px;
}
.products_items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>

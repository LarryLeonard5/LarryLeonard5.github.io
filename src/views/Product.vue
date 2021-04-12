<template>
  <div class="container">
    <div class="content">
      <img v-bind:src="product.src" />
      <div class="title">
        <div>{{ product.name }}</div>
      </div>
      <div v-html="product.description"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}

.content {
  margin: auto;
  width: 1200px;
}

.title {
  margin: 12px 0;
  font-size: 48px;
  text-align: center;
  width: 100%;
}

img {
  width: 100%;
}

@media only screen and (max-width: 1280px) {
  .content {
    width: 900px;
  }
}

@media only screen and (max-width: 980px) {
  .content {
    width: 600px;
  }
}

@media only screen and (max-width: 680px) {
  .content {
    width: 400px;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import data from '../data/data';

@Component({
  components: {},
})
export default class Product extends Vue {
  product = data.products
    .map((product) => {
      return { ...product, src: require(`../assets/images/${product.src}`) };
    })
    .find((p): boolean => p.id === this.$route.params.id);
}
</script>

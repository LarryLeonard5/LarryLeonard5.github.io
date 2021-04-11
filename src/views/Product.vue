<template>
  <div>
    <div>
      <router-link to="/products">See all products</router-link>
    </div>
    <img v-bind:src="product.src" />
    <div class="name">{{ product.name }}</div>
    <div v-html="product.description"></div>
  </div>
</template>

<style scoped>
.name {
  margin: 12px 0;
  font-size: 24px;
}
img {
  width: 1000px;
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

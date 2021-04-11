<template>
  <div>
    <div>
      <ul>
        <li v-for="product in products" v-bind:key="product">
          <div class="title">
            <router-link v-bind:to="`/products/${product.id}`">{{ product.name }}</router-link>
          </div>
          <router-link v-bind:to="`/products/${product.id}`">
            <img v-bind:src="product.src" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}

li {
  margin: 24px 0;
}

.title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 6px;
}

img {
  width: 800px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import data from '../data/data';

@Component({
  components: {},
})
export default class Products extends Vue {
  products = data.products.map((product) => {
    return { ...product, src: require(`../assets/images/${product.src}`) };
  });

  created() {
    console.log(this.products);
  }
}
</script>

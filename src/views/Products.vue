<template>
  <div class="container">
    <div class="content">
      <div class="row">
        <div class="featured-product" v-for="product in featuredProducts" v-bind:key="product">
          <div class="image-container">
            <router-link v-bind:to="`/products/${product.id}`">
              <img v-bind:src="product.src" />
            </router-link>
          </div>
          <div class="title">
            <router-link v-bind:to="`/products/${product.id}`">{{ product.name }}</router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="product" v-for="product in products" v-bind:key="product">
          <router-link v-bind:to="`/products/${product.id}`">
            <img v-bind:src="product.src" />
          </router-link>
          <div class="title">
            <router-link v-bind:to="`/products/${product.id}`">{{ product.name }}</router-link>
          </div>
        </div>
      </div>
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
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 6px;
  width: 100%;
  text-align: center;
}

img {
  display: block;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 90%;
  padding: 5px;
  margin: auto;
}

.image-container {
  height: 420px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.featured-product {
  width: 50%;
}

.product {
  width: 33%;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

@media only screen and (max-width: 1280px) {
  .content {
    width: 900px;
  }

  .image-container {
    height: 310px;
  }
}

@media only screen and (max-width: 980px) {
  .content {
    width: 600px;
  }

  .image-container {
    height: 210px;
  }
}

@media only screen and (max-width: 680px) {
  .content {
    width: 400px;
  }

  .image-container {
    height: auto;
  }

  .featured-product {
    width: 95%;
  }

  .product {
    width: 95%;
  }
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
  featuredProducts: {
    src: string;
    id: string;
    name: string;
    description: string;
  }[] = [];

  created(): void {
    this.featuredProducts = this.products.slice(0, 2);
    this.products = this.products.slice(2, 5);
  }
}
</script>

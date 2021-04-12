<template>
  <div class="container">
    <div class="content">
      <ul>
        <li v-for="image in gallery" v-bind:key="image">
          <img v-bind:src="image.src" />
        </li>
      </ul>
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

ul {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
}

li {
  margin: 6px 0;
  width: 33%;
}

img {
  display: block;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 95%;
  padding: 4px;
  margin: auto;
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

  li {
    width: 100%;
  }
}

@media only screen and (max-width: 680px) {
  .content {
    width: 400px;
  }

  li {
    width: 100%;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import data from '../data/data';

@Component({
  components: {},
})
export default class Gallery extends Vue {
  gallery = data.gallery.map((image) => {
    return { ...image, src: require(`../assets/images/${image.src}`) };
  });
}
</script>

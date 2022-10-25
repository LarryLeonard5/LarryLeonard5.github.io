<template>
  <div class="container">
    <div class="content">
      <ul>
        <li class="gallery-item" v-for="image in gallery" v-bind:key="image.name">
          <img v-bind:src="image.src" />
          <span>{{ image.name }}</span>
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

li.gallery-item span {
  display: none;
  position: relative;
  z-index: 100;
  top: -160px;
  left: 50px;
  background: #ddd;
  color: #2c3e50;
  max-width: 200px;
  padding: 8px;
  border-radius: 8px;
}

li.gallery-item:hover span {
  display: block;
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

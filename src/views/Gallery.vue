<template>
  <div>
    <div>
      <ul>
        <li v-for="image in gallery" v-bind:key="image">
          <img v-bind:src="image.src" />
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
export default class Gallery extends Vue {
  gallery = data.gallery.map((image) => {
    return { ...image, src: require(`../assets/images/${image.src}`) };
  });
}
</script>

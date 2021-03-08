<template>
  <div class="home">
    <div>
      <h2>Quality - Hand crafted outdoor recreational furniture</h2>
      <p>
        Leisure Cedar is an exciting company manufacturing value added outdoor
        recreational furniture from local cedar wood. We have been making high
        quality, comfortable outdoor furniture for the past twenty years.
      </p>
      <p>
        All Leisure Cedar products are shipped flat packed, ready to assemble
        with clear, easy to follow instructions. Only common hand tools needed
        to put them together.
      </p>
      <h3>WHAT FOLKS SAY...</h3>
      <p>
        "We have had many enjoyable years of use and execpt many more to come.
        The quality, workmanship and value are truly appreciated. Selkirk
        Wilderness Ltd. supports Leisure Cedar."
      </p>

      <p></p>
      <div>
        <div><i>Brenda Drury</i></div>
        <div><i>Selkirk Wilderness Skiing Ltd.</i></div>
      </div>
    </div>
    <img src="../assets/images/6-Chairs-and-table-on-Deck-01-03-17-09.jpg" />
  </div>
</template>

<style scoped>
.home {
  display: flex;
}

img {
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 400px;
  padding: 5px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>

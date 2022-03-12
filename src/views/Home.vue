<template>
  <div class="home">
    <router-link to="/products/royal-suite">
      <img src="../assets/images/6-Chairs-and-table-on-Deck-01-03-17-09.jpg" />
    </router-link>

    <div class="copy">
      <div class="heading">
        <h1>Royal Suite</h1>
      </div>
      <p>
        Leisure Cedar is an exciting company manufacturing value added outdoor recreational
        furniture from local cedar wood. We have been making high quality, comfortable outdoor
        furniture for the past twenty years.
      </p>
      <p>
        
      </p>
    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}

img {
  display: block;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 1200px;
  padding: 5px;
  margin: auto;
}

.copy {
  margin: auto;
  width: 1200px;
}

@media only screen and (max-width: 1280px) {
  img {
    width: 900px;
  }

  .copy {
    width: 900px;
  }
}

@media only screen and (max-width: 980px) {
  img {
    width: 600px;
  }

  .copy {
    width: 600px;
  }
}

@media only screen and (max-width: 899px) {
  img {
    width: 400px;
  }

  .copy {
    width: 400px;
  }
}

.heading {
  text-align: center;
}

h1 {
  font-size: 48px;
}
</style>

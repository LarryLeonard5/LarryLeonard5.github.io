<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <div class="logo-text">Leisure Cedar</div>
      </div>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/products">Products</router-link> |
      <router-link to="/orders">Orders</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.header {
  display: flex;
  justify-content: center;
  background-color: #7b826e;
  text-align: center;
}

.logo {
  height: 250px;
  width: 300px;
  background-image: url('~@/assets/images/leisurecedar-logo.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.logo-text {
  font-family: 'Segoe UI', Arial, sans-serif;
  font-weight: 400;
  font-size: 40px;
  color: whitesmoke;
  border: 1px solid whitesmoke;
  border-radius: 4px;
  padding: 6px 0;
  width: 300px;
}

#nav {
  text-align: center;
  padding: 10px 0 20px 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.content {
  margin: 0 36px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="burger-app">
    <div class="container">
      <router-view />
    </div>
    <burgerNav></burgerNav>
  </div>
</template>

<script setup>
import burgerNav from "@com/burgerNav/index.vue";
</script>

<style scoped>
*{
  color: #000;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.burger-app {
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  border-radius: 8px;
  background-color: #f5f5f5;

  /* background: linear-gradient(#9ebbf7, #b4efed); */
  .container {
    height: 100vh;
    width: calc(100% - var(--nav-width) - 10px);
    padding: 20px;
    padding-top:  calc(var(--header-height) + 20px);
    margin-left: auto;
    overflow-y: auto;
  }
}
</style>

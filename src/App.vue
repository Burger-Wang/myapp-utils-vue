<template>
  <div class="burger-app">
    <router-view />
    <burgerNav></burgerNav>
  </div>
</template>

<script setup>
import burgerNav from "./components/burgerNav/index.vue";
</script>

<style scoped>
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
}
</style>

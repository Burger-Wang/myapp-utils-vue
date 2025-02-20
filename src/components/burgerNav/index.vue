<template>
  <div class="nav"></div>
</template>

<script setup>
import { getCurrentInstance, onMounted } from "vue";
import { moveFun } from "@utils/moveManager";
onMounted(() => {
//   moveFun.outMoveing = getMove;
});

const getMove = (e) => {
  console.log(222, e);
};
</script>


<style lang="postcss" scoped>
.nav {
  width: var(--nav-width);
  height: calc(100vh - 20px);
  background-color: #333;
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 8px;
}
</style>
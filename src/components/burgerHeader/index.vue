<template>
  <div class="header">
    <div class="header-title">
      <span class="title">{{ title }}</span>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, mergeProps, onMounted } from "vue";
import { moveFun } from "@utils/moveManager";

const props = defineProps({
  title: {
    type: String,
    default: "Burger Header",
  },
});
onMounted(() => {
  //   moveFun.outMoveing = getMove;
});
</script>


<style lang="postcss" scoped>
.header {
  width: calc(100% - var(--nav-width) - 30px);
  height: var(--header-height);
  background: linear-gradient(to bottom, #f5f5f5 60%, transparent);
  position: absolute;
  top: 0px;
  display: flex;
  text-align: center;
  align-items: center;
  right: 10px;
  padding: 10px 0;
  .title{
    font-size: 32px;
  }
}
</style>
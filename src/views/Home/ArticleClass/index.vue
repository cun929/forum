<template>
  <div id="ArticleClass">
    <!-- <head-list :list="list"></head-list> -->
    <body-list></body-list>
  </div>
</template>
<script setup lang="ts">
// import HeadList from './components/HeadList/index.vue'
import BodyList from './components/BodyList/index.vue'
import { ref } from 'vue'
const list = ref<String[]>(['前端', '后端'])
</script>
<style lang="less">
@import "@/style/variable.less";
#ArticleClass {
  min-height: @height;
}
</style>

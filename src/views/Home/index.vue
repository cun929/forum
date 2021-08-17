<template>
  <div id="Home">
    <head-title></head-title>
    <router-view></router-view>
    <!-- <div style="height:4.5rem" :style="top ? 'top:-4.5 rem' : ''"></div> -->
  </div>
</template>
<script lang="ts" setup>
import HeadTitle from './components/HeadTitle/index.vue'
</script>

<template>
  <div id="Home">
    <p-login></p-login>
    <head-title></head-title>
    <router-view></router-view>
    <!-- <div style="height:4.5rem" :style="top ? 'top:-4.5 rem' : ''"></div> -->
    <p-login></p-login>
  </div>
</template>
<script lang="ts" setup>
import PLogin from '@/components/PopUp/login.vue'
import HeadTitle from './components/HeadTitle/index.vue'
</script>

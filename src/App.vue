<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import axios from '@/utils/ajax'
axios({ method: 'get' }).then(res => {
  console.log('object')
  console.log(res);
}, error => {
  console.log(error);
})
// console.log(ajax)
// ajax({ url: 'http://localhost:3001' })
//   .then(res => {
//     console.log(res)
//   })
</script>
<style lang="less">
</style>

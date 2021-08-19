<template>
  <div class="HeadList" :style="top ? 'position:fixed;top:0;' : 'top:4.5rem'">
    <div @click="on(i)" :class="count === i ? 'a' : ''" v-for="(e, i) in list">{{ e }}</div>
  </div>
  <div :style="top ? 'height:45px;' : ''"></div>
</template>
<script setup lang="ts">
import { ref, defineProps, onMounted, watch, onBeforeUnmount } from 'vue'
// import { onBeforeRouteUpdate } from 'vue-router'
import debounce from '@/utils/debounce'
defineProps({
  list: Array
})
let count = ref<number>(0)
let on = (e: number): number => (count.value = e)

let time;
let scroll = ref<number>(0);
const func = () => {
  // debounce(()=>{scroll.value = document.documentElement.scrollTop},300)
  clearTimeout(time)
  time = setTimeout(() => {
    console.log('time')
    scroll.value = document.documentElement.scrollTop
  }, 300);
}
onMounted(() => {
  window.addEventListener('scroll', func)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', func)
})
let top = ref<boolean>(false)
watch(scroll, (newscroll, oldscroll) => {
  top.value = (oldscroll - newscroll) < 0
})
</script>
<style lang="less">
@import "./index.less";
// 公共变量库
@import "@/style/variable.less";
</style>

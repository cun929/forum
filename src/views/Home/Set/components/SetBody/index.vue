<template>
    <div id="SetBody">
        <head-car></head-car>
        <body-car></body-car>
    </div>
</template>
<script setup lang="ts">
import HeadCar from './components/HeadCar/index.vue'
import BodyCar from './components/BodyCar/index.vue'
</script>
<style lang="less">
@import "@/style/variable.less";
@import "./index.less";
</style>
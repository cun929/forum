<template>
    <div id="HomeSet">
        <set-body></set-body>
        <set-bar></set-bar>
    </div>
</template>
<script setup lang="ts">
import SetBody from './components/SetBody/index.vue'
import SetBar from './components/SetBar/index.vue'
</script>
<style lang="less">
// 公共变量库
@import "@/style/variable.less";
@import "./index.less";
</style>
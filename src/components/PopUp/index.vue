<template>
    <div class="popup">
        <div class="body">
            <div class="hd">
                <div>登录</div>
                <div @click="cl">x</div>
            </div>
            <div class="inp">
                <slot name="inp"></slot>
            </div>
            <div class="btn">
                <slot name="btn"></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useStore } from '@/store'
const { commit } = useStore()
const cl = () => {
    commit('setPop', false)
}
</script>
<style lang="less">
@import "./index.less";
</style>
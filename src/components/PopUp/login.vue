<template>
    <wai-ke v-if="pop">
        <template #inp>
            <div>
                <input type="text" />
            </div>
            <div>
                <input type="text" />
            </div>
        </template>
        <template #btn>
            <div @click="log">login</div>
        </template>
    </wai-ke>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import WaiKe from './index.vue'
import { useStore } from '@/store'
let { state, commit } = useStore()
const pop = computed(() => state.pop)
const log = () => {
    commit('setPop', false)
    commit('setImg', false)
}
</script>
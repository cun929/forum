<template>
    <input type="text" v-model="ip" />
    <div v-html="ip"></div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

let ip = ref<String>('sdas')
</script>
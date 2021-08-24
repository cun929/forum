<template>
    <div id="uploadArticle">
        <div>123123</div>
        <div>
            <div>
                <textarea type="text" v-model="s" />
            </div>
            <div v-html="c"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import marked from 'marked'
import { ref, computed } from 'vue'
let s = ref<String>('# 12321')
let c = computed(() => {
    return marked(s.value, { sanitize: true })
})


</script>
<style lang="less">
#uploadArticle {
    display: flex;
    flex-direction: column;
    height: 100vh;
    > div {
        &:nth-child(1) {
            height: 70px;
            background-color: #fff;
            width: 100%;
        }
        &:nth-child(2) {
            height: calc(~"100vh - 70px");
            display: flex;
            flex-direction: row;
            width: 100%;
            textarea {
                background-color: #fff;
                border: none;
                padding: 10px;
                width: 100%;
                height: 100%;
                outline: none;
            }
            > div {
                padding: 20px;
                flex: 1;
            }
        }
    }
}
</style>
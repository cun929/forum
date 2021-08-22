<template>
    <div id="BodyList">
        <div>
            <div v-for="e in list">
                <div>
                    <div>Iroot</div>
                    <div>36分钟</div>
                    <div>前端</div>
                </div>
                <div>
                    <div>
                        <h3>1123</h3>
                        <p>1231231</p>
                    </div>
                    <div>
                        <img src="@/assets/preview.jpg" />
                    </div>
                </div>
                <div>
                    <i class="iconfont icon-dianzan">123</i>
                    <i class="iconfont icon-yanjing">213</i>
                    <i class="iconfont icon-pinglun">12312</i>
                </div>
            </div>
        </div>
        <div>
            <div>1</div>
            <div :style="t ? 'opacity:1 ;' : 'opacity: 0;'">2</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { lists } from '@/hooks/Home/HeadList'
const { list, t } = lists()
</script>
<style lang="less">
@import "./index.less";
</style>

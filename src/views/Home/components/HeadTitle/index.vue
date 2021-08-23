<template>
  <div id="HeadTitle" :style="top ? 'top:-4.5rem' : 'top:0'">
    <div>
      <div class="tit">
        <img src="@/assets/logo.png" />
        <p>掘金</p>
      </div>
      <div class="body">
        <div>
          <div>
            <router-link to="/home/">首页</router-link>
            <router-link to="/home/ArticleDetails">沸点</router-link>
            <router-link to="/home"></router-link>
          </div>
          <div @click="() => { tp = !tp }">
            <div>{{ tit }}</div>
            <div v-if="tp" style="z-index:10001;">
              <router-link @click="qh('首页')" to="/home/">首页</router-link>
              <router-link @click="qh('沸点')" to="/home/ArticleDetails">沸点</router-link>
            </div>
          </div>
        </div>
        <div :class="bl ? 'a' : ''">
          <div>
            <input @focus="f" @blur="f" type="text" />
            <i class="iconfont icon-sousuo"></i>
          </div>
          <div>
            <div @click="() => { Router.push('/user/uploadArticle') }">创作者中心</div>
            <div>写文章</div>
          </div>
        </div>
        <div>
          <div v-if="Img" class="log" @click="log">登录</div>
          <div v-else class="user">
            <div>
              <i class="iconfont icon-icon_news_fill"></i>
            </div>
            <div>
              <router-link to="/home/set">
                <img src="@/assets/preview.jpg" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="height:4.5rem" :style="top ? 'top:-4.5 rem' : ''"></div>
  <!-- <div style="height:4.5rem" :style="top ? 'top:-4.5 rem' : ''"></div> -->
</template>
<script setup lang="ts">
import { ref, onMounted, watch, onBeforeUnmount, computed } from 'vue'
import debounce from '@/utils/debounce'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
const Router = useRouter();

let { state, commit } = useStore()
// 标题连显示是否登录
const Img = computed(() => state.img)
const log = () => {
  commit('setPop', true)
}
let bl = ref<boolean>(false)
// 标题栏伸缩
let time;
let scroll = ref<number>(0);
const func = () => {
  debounce(() => { scroll.value = document.documentElement.scrollTop }, 300)
}
onMounted(() => {
  window.addEventListener('scroll', func)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', func)
})
// 小屏显示，菜单栏下拉
const f = (): boolean => (bl.value = !bl.value)
// 监听更改top高度
let top = ref<boolean>(false)
watch(scroll, (newscroll, oldscroll) => {
  top.value = (oldscroll - newscroll) < 0
  tp.value = false
})
// 标题栏小屏幕变量
let tit = ref<String>('首页')
let tp = ref<boolean>(false)

// 更改小屏幕标题栏显示
const qh = (e: String): String => tit.value = e
</script>
<style lang="less">
// 公共变量库
@import "@/style/variable.less";
// 页面样式
@import "./index.less";
</style>

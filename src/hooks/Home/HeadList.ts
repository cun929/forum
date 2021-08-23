import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
export function lists() {
    let time = ref<any>;
    let scroll = ref<number>(0)
    // 控制是否达到需要更改样式的位置
    let t = ref<boolean>(false)
    let s = ref<boolean>(false)
    let list = ref<number>(8)
    let stl = computed(() => {
        if (t.value) {
            if (s.value) {
                return 'position:fixed;top:10px;'

            } else return 'position:fixed;top:92px;'
        }
        return ''
    })
    const func = () => {
        t.value = (document.documentElement.scrollTop > 550)
        console.log(t.value)
        clearTimeout(time.value)
        time.value = setTimeout(() => {
            scroll.value = document.documentElement.scrollTop
            if ((document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight) < 1) {
                list.value += 10
            }

        }, 300)
    }
    onMounted(() => {
        window.addEventListener('scroll', func)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('scroll', func)
    })
    watch(scroll, (n, o) => {

        if (t.value) {
            s.value = (n - o > 0)
        }
    })
    return {
        list, t, s, stl
    }
}
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
export function lists() {
    let time;
    let scroll = ref<number>(0);
    let t = ref<boolean>(false)
    let list = ref<number>(8)
    const func = () => {
        t.value = (document.documentElement.scrollTop > 500)
        clearTimeout(time)
        time = setTimeout(() => {
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
    return {
        list, t
    }
}
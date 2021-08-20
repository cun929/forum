import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
export function add() {
    let time;
    let scroll = ref<number>(0);
    const func = () => {
        clearTimeout(time)
        time = setTimeout(() => {
            console.log('time')
            scroll.value = document.documentElement.scrollTop
        }, 300);
    }
    onMounted(() => {
        window.addEventListener('scroll', func)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('scroll', func)
    })
    let top = ref<boolean>(false)
    watch(scroll, (newscroll, oldscroll) => {
        top.value = (oldscroll - newscroll) < 0
    })
    return {
        top
    }
}
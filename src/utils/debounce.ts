import { ref } from 'vue'
let ins = ref<any>();
function debounce(func: Function, time: number) {
    clearTimeout(ins)
    ins = setTimeout(() => {
        func()
    }, time);
}
export default debounce
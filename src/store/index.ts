// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  list: string[],
  pop: boolean,
  img: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()
/**
 * pop 控制登录
 * img 控制标题栏显示
 */
export const store = createStore<State>({
  state: {
    list: ['前端', '后端'],
    pop: false,
    img: true
  },
  mutations: {
    setPop(state, s: boolean) {
      state.pop = s
    },
    setImg(state, s: boolean) {
      state.img = s
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key)
}
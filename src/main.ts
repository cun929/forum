import { createApp } from "vue"
import App from './App.vue'
import './style/main.less'
import './style/icon.css'
import router from './router/index'
import { store, key } from './store/index'
// createApp(App).use(router).use(store, key).mount('#app')
const app = createApp(App)
app.use(router)
app.use(store, key)
app.config.globalProperties.cp = (): string => 'sdsad'
const vm = app.mount('#app')

import './utils/permission'
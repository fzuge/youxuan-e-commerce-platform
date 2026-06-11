import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { getCategory } from './apis/testAPI'

import '@/styles/common.scss'
import { appPlugin } from '@/directives/index.js'

import { componentPlugin } from '@/components/index.js'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(appPlugin)
app.use(componentPlugin)
getCategory().then((res) => {
  // console.log(res)
})
app.mount('#app')

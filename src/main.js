import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { getCategory } from './apis/testAPI'

import '@/styles/common.scss'
import { appPlugin } from '@/directives/index.js'

getCategory().then((res) => {
  // console.log(res)
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(appPlugin)

app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// ビルド後のファイルサイズが大きすぎると警告が出るため、動的インポートで別ファイルに切り離す
const { initVuetify } = await import('./plugins/vuetify')

const app = createApp(App)

const vuetify = await initVuetify()

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')

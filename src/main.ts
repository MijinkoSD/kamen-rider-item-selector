import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initVuetify } from './plugins/vuetify'

const app = createApp(App)

const vuetify = await initVuetify()

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')

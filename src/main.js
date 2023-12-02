import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Store from "./Store/index.js"
import router from './router/index.js'

const app = createApp(App)


app.use(router)
app.use(Store)
app.mount('#app')

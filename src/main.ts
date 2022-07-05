import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import { install } from './compnents'


const app = createApp(App)
install(app)
app.use(router)
app.use(createPinia())
app.mount('#app')
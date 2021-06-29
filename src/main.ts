import { createApp } from 'vue'
import { Icon } from 'vant'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'

const app = createApp(App)
app.use(Icon)
app.use(router)
app.mount('#app')

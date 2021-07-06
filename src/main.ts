import { createApp } from 'vue'
import {
  Icon,
  Button,
  Search,
  Swipe,
  SwipeItem,
  Skeleton,
  Tab,
  Tabs,
  Image,
} from 'vant'

import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'

const app = createApp(App)
app
  .use(Icon)
  .use(Button)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(Skeleton)
  .use(Tab)
  .use(Tabs)
  .use(Image)
app.use(router)
app.mount('#app')

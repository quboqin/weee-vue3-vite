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
  Field,
  CellGroup,
  Badge,
} from 'vant'

import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import './index.css'

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
  .use(Field)
  .use(CellGroup)
  .use(Badge)
app.use(router)
app.mount('#app')

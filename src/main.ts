import './assets/main.css'
import 'amfe-flexible'
import './utils/rem'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import Axios from './apis/ajax'

// import mountElementUI from './utils/elementUI'

document.title = import.meta.env.VITE_APP_TITLE

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(createPinia())
app.provide('$http', Axios)
app.use(router)

// 全量引入Element UI
// mountElementUI(app)
app.mount('#app')

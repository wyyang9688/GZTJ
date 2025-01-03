import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'
import registerRouteGuard from './Interceptor'
import routes from './routes'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

// 注册路由守卫
registerRouteGuard(router)

export default router

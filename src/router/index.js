import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util.js'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes
})

const HAS_LOGINED = true

router.beforeEach((to, from, next) => {

  to.meta && setTitle(to.meta.title)

  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({name: 'login'})
  } else {
    if (HAS_LOGINED) next({name: 'home'})
    else next()
  }
})

router.afterEach((to, from) => {

})

/**
 * 1. 导航被处罚
 * 2. 在失活的组件里调用离开守卫  beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被集火的组件里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 处罚DOM更新
 * 12. 用创建好的实例调用beforeRouterEnter守卫传给next的回调函数
 *
*/

export default router



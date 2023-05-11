import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./README.md')
    },
    {
      path: '/web',
      component: () => import('./web/web/README.md')
    },
    {
      path: '/a',
      component: () => import('./web/web/a.vue')
    }
  ]
})

export default router
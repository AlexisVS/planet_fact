import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path:'/', redirect: '/mercury/overview'},
  {
    path: '/:slug/:info',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    // children: [
    //   {path: '',},
    // ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import login from './views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/democratized-vc',
      name: 'democratizedvc',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "democratizedvc" */ './views/democratized-vc.vue')
    },
    {
      path: '/historical-records',
      name: 'historicalrecords',
      component: () => import(/* webpackChunkName: "historicalrecords" */ './views/historical-records.vue')
    },
    {
      path: '/instant-money',
      name: 'instantmoney',
      component: () => import(/* webpackChunkName: "instantmoney" */ './views/instant-money.vue')
    },
    {
      path: '/liquid-democracy',
      name: 'liquiddemocracy',
      component: () => import(/* webpackChunkName: "liquiddemocracy" */ './views/liquid-democracy.vue')
    },
    {
      path: '/supply-chain-transparency',
      name: 'supplychaintransparency',
      component: () => import(/* webpackChunkName: "supplychaintransparency" */ './views/supply-chain-transparency.vue')
    },
    {
      path: '/all-evidence',
      name: 'allevidence',
      component: () => import(/* webpackChunkName: "allevidence" */ './views/all-evidence.vue')
    },
    {
      path: '/submit-evidence',
      name: 'submitevidence',
      component: () => import(/* webpackChunkName: "submitevidence" */ './views/submit-evidence.vue')
    },
    {
      path: '/visualization-playground',
      name: 'visualizationplayground',
      component: () => import(/* webpackChunkName: "visualizationplayground" */ './views/visualization-playground.vue')
    },
    {
      path: '/time-submission',
      name: 'timesubmission',
      component: () => import(/* webpackChunkName: "visualizationplayground" */ './views/time-submission.vue')
    },
    {
      path: '/behind-the-curtain',
      name: 'behindthecurtain',
      component: () => import(/* webpackChunkName: "visualizationplayground" */ './views/behind-the-curtain.vue')
    }
  ]
})

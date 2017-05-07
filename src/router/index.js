import Vue from 'vue'
import Router from 'vue-router'
import data from '@/components/data'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'data',
      component: data
    }
  ]
})
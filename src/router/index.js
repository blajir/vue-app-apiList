import Vue from 'vue'
import Router from 'vue-router'
import ApiList from '@/components/apilist'
import Hello from '@/components/Hello'
import Content from '@/components/Content'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'apiList',
      component: ApiList
    },
    {
      path: '/content/:id',
      name: 'content',
      component: Content
    }
  ]
})

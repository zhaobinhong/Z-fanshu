import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import signUp from '@/pages/signUp'
import sigIn from '@/pages/sigIn'
import ArticleList from '@/pages/List'
import ArticleCreate from '@/pages/create'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'List',
      component: ArticleList
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/sigIn',
      name: 'sigIn',
      component: sigIn
    },
    {
      path: '/article/create',
      name: 'ArticleCreate',
      component: ArticleCreate,
      meta: {
        needLogin: true
      }
    }
  ]
})

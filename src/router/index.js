import Vue from 'vue'
import Router from 'vue-router'
import Seckill from 'components/seckill/seckill'
import Purchased from 'components/purchased/purchased'
// import GoodList from 'components/good-list/good-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/seckill',
      component: Seckill
    },
    {
      path: '/purchased',
      component: Purchased
    }
  ]
})

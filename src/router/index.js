import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
import SingerDetail from 'components/singer-detail/singer-detail'

import Disc from 'components/disc/disc'
import TopList from 'components/top-list/top-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path:'/recommend',
      name:'h',
      component:Recommend,
      children:[
        {
          path:':id',
          component:Disc
        }
      ]
    },
    {
      path:'/singer',
      name:'sing',
      component:Singer,
      children:[
        {
          path:':id',
          component:SingerDetail
        }
      ]
    },
    {
      path:'/rank',
      name:'r',
      component:Rank,
      children:[
        {
          path:':id',
          component:TopList
        }
      ]
    },
    {
      path:'/search',
      name:'s',
      component:Search,
      children:[
        {
          path:':id',
          component:SingerDetail
        }
      ]
    }
  ]
})

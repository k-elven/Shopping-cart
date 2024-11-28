import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import myorder from '@/views/myorder'
import pay from '@/views/pay'
import prodetail from '@/views/prodetail'
import search from '@/views/search'
import searchlist from '@/views/search/list'
import store from '@/store'
//子路由
import home from '@/views/layout/home'
import cart from '@/views/layout/cart'
import category from '@/views/layout/category'
import user from '@/views/layout/user'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/login', component: Login},
    {
      path: '/', 
      component: Layout,
      redirect:'/home',
      children:[
        {path: '/home', component: home},
        {path: '/category', component: category},
        {path: '/cart', component: cart},
        {path: '/user', component: user}
      ]
    },
    {path: '/myorder', component: myorder},
    {path: '/pay', component: pay},
    //商品传参
    {path: '/prodetail/:id', component: prodetail},
    {path: '/search', component: search},
    {path: '/searchlist', component: searchlist},
  ]
})

const authUrl = ['/pay','/myorder']
router.beforeEach((to,from,next) => {
  if(!authUrl.includes(to.path)){
    next()
    return
  }
  const token = store.state.user.userInfo.token
  if(token){
    next()
  }else{
    next('/login')
  }
})

export default router


import Vue from 'vue'
import Router from 'vue-router'

// 如果你的改了push还是没有生效，可以考虑改replace方法
// 修改路由replace方法,阻止重复点击报错
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      // component: () => import('@/pages/login')
      component: () => import('../views/home/Home.vue')
    },
    {
      path: '/category',
      component: () => import('../views/category/Category.vue')
    },
    {
      path: '/shopcart',
      component: () => import('../views/shopcart/Shopcart.vue')
    },
    {
      path: '/profile',
      component: () => import('../views/profile/Profile.vue')
    }
  ],
  mode: 'history'
})

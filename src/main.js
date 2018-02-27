import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

// 安装路由
Vue.use(VueRouter)

Vue.config.productionTip = false

// 创建路由实例
const router = new VueRouter({
  routes
})

// 删除App.vue总视图文件
new Vue({
  el: '#app',
  router
})

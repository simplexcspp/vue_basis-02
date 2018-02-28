import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import * as filter from '@/filters'

// 安装路由
Vue.use(VueRouter)

Vue.config.productionTip = false

// 创建路由实例
const router = new VueRouter({
  routes
});

// 注册自定义过滤器
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key]);
});

// 删除App.vue总视图文件
new Vue({
  el: '#app',
  router
})

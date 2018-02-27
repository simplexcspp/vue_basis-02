// 直接导出路由配置，主入口文件需安装并实例化路由
export default [
  {
    path: '/',
    name: 'test',
    component: resolve => require(['../views/test/Test.vue'], resolve)
  }
]
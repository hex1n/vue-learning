// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

//表示使用这个插件
/*
* 使用vue-resource请求数据的步骤
*   1.需要安装vue-resource模块
*       npm install vue-resource --save
*
*   2.main.js引入vue-resource
*       import VueResource from 'vue-resource'
*
*   3. Vue.use(VueResource)
*
*   4.在组件里面直接使用
*     this.$http.get(地址).then(function(){
*
*     })
*
* */
Vue.use(VueResource);
Vue.use(VueRouter);

//1.创建组件
import Home from './components/Home';
import News from './components/News';

//2.配置路由
const routes = [
  {path: '/home', component: Home},
  {path: '/news', component: News},

  {path: '*', redirect: '/home'}, //默认跳转路由

]

//3.实例化VueRouter

const router = new VueRouter({
  routes//(缩写)相当于routes:routes
})




Vue.config.productionTip = false

/* eslint-disable no-new */
//4.挂载路由
new Vue({
  el: '#app',
  router,
  render: h => h(App),

})

//根组件的模板里面放上这句话,表示动态加载的路由
//5.<router-view></router-view> 放在App.vue里面

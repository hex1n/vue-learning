// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

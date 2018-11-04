<template>
  <!--所有的内容要被根节点包含起来-->
  <div>

    <v-header :title="title" :homemsg="msg" :run="run" :home="this"></v-header>
    <v-header ref="header"></v-header>
    首页组件 <br/>
    <button @click="getChildData()">父组件主动获取子组件的数据和方法</button>
    <br>

    <hr>
    <h3>这是一个首页组件----{{msg}}</h3>

    <button @click="run()">执行run方法</button>
    <br>
    <hr>
    <v-life v-if="flag"></v-life>
    <br>
    <br>
    <br>
    <button @click="flag=!flag">挂载以及卸载life组件</button>

    <br>
    <br>
    <hr>

    <h5>12 13 vue 请求数据演示</h5>
    <button @click="getDataByVueResource()">使用vue-resource请求数据</button>
    <button @click="getDataByAxios()">使用Axios请求数据</button>

    <hr>
    <br/>
    <br/>
    <h5>14 vue 父子组件传值</h5>


    <ul>
      <span style="color: red">使用vue-resource请求数据:</span>
      <li v-for="item in list">
        {{item.title}}
      </li>
    </ul>
    <ul>
      <span style="color: blue">使用Axios请求数据:</span>
      <li v-for="item in list1">
        {{item.title}}
      </li>
    </ul>


  </div>
</template>

<script>
  //引入头部组件
  import Header from './Header';
  import Life from './Lify';
  import Axios from 'axios';

  export default {
    name: "Home",
    data() {
      return {
        msg: '我是一个首页组件msg',
        title: '首页111',
        flag: true,
        list: [],
        list1: [],
      }
    },
    components: {
      'v-header': Header,
      'v-life': Life,
    },
    methods: {
      run: function (data) {

        alert(this.msg);
        alert('我是Home组件的run方法' + data);
      },
      getDataByVueResource: function () {
        //请求数据

        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';

        this.$http.get(api).then((response) => {

          console.log(response);
          //注意this指向  箭头函数里面的this指向的是上下文,如果不是用的箭头函数则需要在外面定义一个来保存this
          this.list = response.body.result;


        }, function (err) {

          console.log(err)
        })
      },
      getDataByAxios: function () {

        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        Axios.get(api).then((response) => {

          console.log(response);
          this.list1 = response.data.result;
        }).catch((error) => {

          console.log(error);
        })
      },
      getChildData: function () {

        //获取子组件中的msg
        alert(this.$refs.header.msg)
        //获取子组件的run方法
        // this.$refs.header.run();
      }

    },
    mounted() {

      //页面一加载就请求数据
      this.getDataByVueResource();
      this.getDataByAxios();
    }
  }
</script>

<style scoped lang="scss">
  /*scoped 表示css局部作用域*/

  h3 {
    color: red;
  }

</style>

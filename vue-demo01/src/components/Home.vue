<template>
  <!--所有的内容要被根节点包含起来-->
  <div>

    <v-header></v-header>
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

    <h5>12 vue 请求数据演示</h5>
    <button @click="getData()">请求数据</button>

    <hr>
    <br/>

    <ul>
      <li v-for="item in list">
        {{item.title}}
      </li>
    </ul>


  </div>
</template>

<script>
  //引入头部组件
  import Header from './Header';
  import Life from './Lify';

  export default {
    name: "Home",
    data() {
      return {
        msg: '我是一个首页组件msg',
        flag: true,
        list: [],
      }
    },
    components: {
      'v-header': Header,
      'v-life': Life,
    },
    methods: {
      run: function () {

        alert(this.msg)
      },
      getData: function () {
        //请求数据

        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';

        this.$http.get(api).then((response) => {

          console.log(response);
          //注意this指向  箭头函数里面的this指向的是上下文,如果不是用的箭头函数则需要在外面定义一个来保存this
          this.list = response.body.result;


        }, function (err) {

          console.log(err)
        })
      }

    },
    mounted() {

      //页面一加载就请求数据
      this.getData();
    }
  }
</script>

<style scoped lang="scss">
  /*scoped 表示css局部作用域*/

  h3 {
    color: red;
  }

</style>

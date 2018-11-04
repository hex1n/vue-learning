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
        flag: true
      }
    },
    components: {
      'v-header': Header,
      'v-life': Life,
    },
    methods: {
      run: function () {

        alert(this.msg)
      }

    }
  }
</script>

<style scoped lang="scss">
  /*scoped 表示css局部作用域*/

  h3 {
    color: red;
  }

</style>

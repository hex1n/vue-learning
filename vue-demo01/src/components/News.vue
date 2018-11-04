<template>
  <div>
    <v-header></v-header>

    <h3>这是一个新闻组件</h3>
    <ul>
      <li>
        1111
      </li>
      <li>
        2222
      </li>
      <li>
        3333
      </li>
    </ul>
    <h2>16</h2>
    <br>
    <button @click="emitHome()">给Home组件广播数据</button>
    <br>

  </div>
</template>

<script>
  //引入头部组件
  import Header from './Header'
  import VueEvent from '../model/VueEvent'

  export default {
    name: "News",
    data() {

      return {
        msg: '我是一个新闻组件'
      }
    },
    methods:{
      emitHome:function () {

        //广播
        VueEvent.$emit('to-home',this.msg)
      }
    },
    components: {
      'v-header': Header
    },
    mounted() {
      VueEvent.$on('to-news', function (data) {

        console.log(data);
      })
    }

  }
</script>

<style scoped lang="scss">

</style>

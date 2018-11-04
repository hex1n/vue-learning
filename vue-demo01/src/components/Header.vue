<template>
  <div>
    <h3 class="header">我是一个头部组件--- {{title}}----{{homemsg}}</h3>

    <button @click="run('123')">执行父组件的run方法</button>

    <br>
    <br>
    <button @click="getParent()">获取父组件的数据和方法</button>


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

  </div>
</template>

<script>
  export default {
    name: "News",
    data() {

      return {
        msg: '子组件的msg',
      }
    },
    methods: {
      getParent: function () {
        // alert(this.title)
        // alert(this.home.title)
        alert(this.home.run())

      }

    },
    //表示接收父组件传过来的title
    props: ['title', 'homemsg', 'run', 'home']

  }
</script>

<style lang="scss">

  .header {
    background: #000;
    color: #fff;
  }

</style>

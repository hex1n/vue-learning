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

  </div>
</template>

<script>
  //引入头部组件
  import Header from './Header'

  export default {
    name: "News",
    data() {

      return {
        msg: '我是一个新闻组件'
      }
    },
    components: {
      'v-header': Header
    }

  }
</script>

<style scoped lang="scss">

</style>

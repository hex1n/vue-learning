<template>
  <div>
    <h3 class="header">这是一个头部组件</h3>
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
        msg: '我是一个头部组件'
      }
    }

  }
</script>

<style lang="scss">

  .header {
    background: #000;
    color: #fff;
  }

</style>

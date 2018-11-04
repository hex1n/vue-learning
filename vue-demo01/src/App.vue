<template xmlns:v-header="http://www.w3.org/1999/xlink">
  <div id="app">

    <h2>03 数据绑定 绑定属性 循环渲染 数据渲染</h2>

    <h2>{{msg}}</h2>
    <br>
    这是一个根组件
    <br>
    <h3>{{obj.name}}</h3>
    <br>
    <hr>
    <br>

    <ul>
      <li v-for="item in list">
        {{item}}
      </li>
    </ul>

    <hr>
    <br>

    <ul>
      <li v-for="item in list1">
        {{item.title}}
      </li>
    </ul>
    <hr>
    <br>

    <ul>
      <li v-for="item in list2">
        {{item.cate}}
        <ol>
          <li v-for="news in item.list">
            {{news.title}}
          </li>
        </ol>
      </li>
    </ul>
    <br>
    <br>

    <h2>04 Vue绑定属性 绑定CSS 绑定style </h2>

    <div v-bind:title="title1">鼠标喵上去看一下</div>
    <img src="http://s1.dwstatic.com/group1/M00/9B/88/6111cf54a1b3cbba0ccf9ae3275ef3a6.gif">
    <br>
    <!--绑定属性-->
    <img v-bind:src="url"/>
    <br>
    <!--简写-->
    <img :src="url"/>
    <br>
    <!--绑定html-->
    <div v-html="h"></div>

    <!--绑定数据的另一种方法-->
    <div v-text="msg"></div>

    <br>
    <!--v-bind:class   :class的使用-->
    <div v-bind:class="{'red':flag}">
      我是一个div
    </div>
    <br>
    <br>
    <div v-bind:class="{'red':flag,'blue':!flag}">
      我是第二个div
    </div>

    <br>
    <br>
    <!--循环数据,第一个数据高亮-->
    <ul>
      <li v-for="(item,key) in list" :class="{'red':key==0,'blue':key==1}">
        {{key}}---{{item}}
      </li>
    </ul>

    <br>
    <br>
    <!--v-bind:style  :style的使用-->
    <div class="box" v-bind:style="{width:boxWidth+'px'}">
      我是一个div
    </div>

    <br>
    <br>

    <h2>05 Vue及双向数据绑定 Vue事件介绍 Vue中的ref获取dom节点 </h2>

    <!--双向数据绑定  MVM vue就是一个MVVM的框架
        M   model
        V   view
        MVVM: model   改变会影响视图view view视图改变反过来影响model
        双向数据绑定必须咋表单里面使用

    -->

    <h3>{{message}}</h3>
    <input type="text" v-model="message" title=""/>

    <button v-on:click="getMsg()">获取表单里面的数据</button>


    <button v-on:click="setMsg()">设置表单数据</button>

    <br>
    <br>
    <hr>

    <br>
    <br>
    <!--ref相当于是给input框起个名字 类似于id-->
    <input type="text" ref="userinfo" title=""/>
    <button v-on:click="getInputValue()">获取第二个表单里面的数据</button>

    <br>
    <br>
    <hr>
    <div ref="box">我是一个box</div>
    <br/>
    <br/>
    <br/>
    <!--06 Vue 事件 定义方法 获取数据 改变数据  执行方法传值 以及事件对象-->

    <h2>06 Vue 事件 定义方法 获取数据 改变数据 执行方法传值 以及事件对象</h2>
    <button v-on:click="run1()">执行事件的第一个方法</button>
    <button @click="run2()">执行事件的第二个方法</button>
    <br/>
    <br/>
    <button @click="getDataMsg()">获取data里面的msg</button>
    <br/>
    <br/>
    <button @click="setDataMsg()">改变data里面的msg</button>
    <br/>
    <br/>
    <button @click="requestData()">请求数据</button>
    <ul>
      <li v-for="(item,key) in list3">
        {{key}}--- {{item}}
      </li>
    </ul>

    <br/>
    <hr>
    <button @click="deleteData('111')">执行方法传值111</button>
    <br>
    <br>
    <button @click="deleteData('222')">执行方法传值222</button>
    <br>
    <br>
    <button data-aid='123' @click="eventFn($event)">事件对象</button>

    <br>
    <br>
    <br>
    <hr>
    <h2>07 08 vue-todoList完整</h2>
    <h2>09 模块化以及封装Storage</h2>

    <input type="text" v-model="todo" @keydown="doAdd($event)"/>
    <button @click="doAdd()">增加</button>
    <br/>
    <br/>
    <h2>进行中</h2>
    <ul>
      <li v-for="(item,key) in list4" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList()"/> {{item.title}}-------
        <button @click="removeData(key)">删除</button>
      </li>
    </ul>
    <br>
    <h2>已完成</h2>
    <ul class="finish">
      <li v-for="(item,key) in list4" v-if="item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList()"/> {{item.title}}-------
        <button @click="removeData(key)">删除</button>
      </li>
    </ul>
    <br>
    <br>
    <br>
    <hr>
    <h2>10 vue中创建单文件组件 注册组件 以及组件的使用</h2>

    <div>
      <h3>我是一个根组件</h3>
      <v-home></v-home>

      <hr>
      <br>

      <v-news></v-news>
    </div>

    <br>
    <br>
    <br>
    <hr>
    <h2>11 生命周期函数</h2>
    <h5>
      生命周期函数:
      组件挂载 以及 组件更新 组件销毁的时候出发的一系列的方法
      这些方法就叫做生命周期函数: mounted{}
    </h5>

    <br>
    <br>
    <br>
    <hr>
    <h2>12 13 vue请求数据</h2>
    <h5>
      请求数据的模板:<br>
      1.vue-resource 官方提供的vue 的一个插件<br>
      2.axios 的使用:<br>
      1.安装 npm install axios --save<br>
      2.哪里用哪里引入axios<br>

    </h5>

    <br>
    <br>
    <br>
    <hr>
    <h2>14 vue 父子组件传值</h2>
    <ul>
      父组件给子组件传值
      <li>1.父组件调用子组件的时候,绑定动态属性:v-header :title="title"></li>
      <li>2.在子组件里面通过 props接收父组件传过来的数据></li>
    </ul>
    <br>
    <br>
    <br>
    <hr>
    <h2>15 父组件主动获取子组件的数据和方法 子组件主动获取父组件的数据和方法</h2>
    <h3>父组件主动获取子组件的数据和方法:</h3>
    <p>1.调用子组件的时候定义一个ref: </p>
    <p>例:< v-header ref="header" > < / v-header></p>
    <p>2.在父组件里面通过 this.$refs.header.属性 </p>
    <p>在父组件里面通过 this.$refs.header.方法 </p>
    <br>
    <hr>
    <h3>子组件主动获取父组件的数据和方法:</h3>
    <p>this.$parent.数据</p>
    <p>this.$parent.方法</p>
    <br>
    <br>
    <br>
    <hr>
    <h2>16 vue 非父子组件传值</h2>
    <h4>非父子组件传值</h4>
    <ul>
      <li>1.新建一个js文件,然后引入vue 实例化vue 最后暴露这个实例</li>
      <li>2.在要广播的地方引入刚才定义的实例</li>
      <li>3.通过VueEmit.$emit('名称','数据')</li>
      <li>4.在接收数据的地方通过$on接收广播的数据: VueEmit.$on('名称',function(){})</li>
    </ul>
    <hr>
    <br>
    <v-home></v-home>
    <br>
    <hr>
    <v-news></v-news>


  </div>
</template>

<script>

  // 1.引入组件
  // 2.挂载组件
  // 3.在模板中使用
  import storage from './model/storage';
  import Home from './components/Home';
  import News from './components/News';

  console.log(storage);
  export default {
    name: 'App',
    data() {
      return {
        msg: "你好Vue",
        obj: {
          name: "张三"
        },
        list: ["111", "222", "333"],
        list1: [
          {'title': '1111'},
          {'title': '2222'},
          {'title': '3333'},
          {'title': '4444'},
        ],
        list2: [
          {
            'cate': '国内新闻',
            'list': [
              {'title': '国内新闻11111'},
              {'title': '国内新闻22222'},
            ]
          }, {
            'cate': '国际新闻',
            'list': [
              {'title': '国际新闻11111'},
              {'title': '国际新闻22222'},
            ]
          }
        ],
        title1: '我是一个title',
        url: 'http://s1.dwstatic.com/group1/M00/9B/88/6111cf54a1b3cbba0ccf9ae3275ef3a6.gif',
        h: '<h2>我是h2</h2>',
        flag: false,
        boxWidth: 300,
        message: '双向数据绑定',
        list3: [],
        list4: [],
        todo: '',
      }
    },
    //注册组件
    components: {
      //前面的组件名称不能喝html标签一样
      'v-home': Home,
      'v-news': News
    }, methods: {
      //放方法的地方
      getMsg() {
        // alert("vue方法执行了")
        //在方法里面获取data数据
        alert(this.message);
      },
      setMsg() {
        this.message = "我是改变后的数据";
      },
      getInputValue() {

        //获取ref定义的dom节点
        console.log(this.$refs.userinfo);

        //改变box的背景颜色
        this.$refs.box.style.background = 'red';

        alert(this.$refs.userinfo.value)
      },
      run1: function () {
        alert("这是一个方法");
      },
      run2: function () {
        alert("这是另一个方法")
      },
      getDataMsg: function () {
        alert(this.msg);
      },
      setDataMsg: function () {

        alert(this.msg = "我是改变后的数据")
      },
      requestData: function () {

        for (var i = 0; i < 10; i++) {
          this.list3.push('我是第:' + i + '条数据');
        }
      },
      deleteData: function (val) {
        alert(val)
      },
      eventFn: function (e) {
        console.log(e);

        // e.srcElement dom 节点
        e.srcElement.style.background = 'red';

        //获取自定义属性的值
        console.log(e.srcElement.dataset.aid);

      },
      doAdd: function (e) {

        // console.log(e.keyCode)
        //按下回车就添加
        if (e) {
          if (e.keyCode == 13) {
            //1. 获取文本框输入的值 2.把文本框的值push到list4中
            this.list4.push({
              title: this.todo,
              checked: false
            });
            this.todo = '';
          }
        } else {
          this.list4.push({
            title: this.todo,
            checked: false
          });
          this.todo = '';
        }
        //缓存list4
        // localStorage.setItem('list', JSON.stringify(this.list4));
        storage.set('list', this.list4);

      },
      removeData: function (key) {

        //表示在key这个位置删除一项
        //splice js操作数组的方法
        this.list4.splice(key, 1);

        // localStorage.setItem('list', JSON.stringify(this.list4));
        storage.set('list', this.list4);
      },
      saveList: function () {

        // localStorage.setItem('list', JSON.stringify(this.list4));
        storage.set('list', this.list4);
      }
    },
    mounted() {
      //生命周期函数  vue 页面刷新就会触发的方法

      console.log("我是一个生命周期函数")
      var list = storage.get('list');
      if (list) {
        this.list4 = list;
      }
    }
  }
</script>

<style lang="scss">
  .red {
    color: red;
  }

  .blue {
    color: blue;
  }

  .box {
    height: 100px;
    width: 100px;
    background: red;
  }

  .finish {

    li {
      background: #eee;
    }
  }
</style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links 111</h2>
    
    <h1>{{ message }}</h1>
    <div v-html="message"></div>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>{{ h2_title }}</h2>
    <ul v-if="seen">
      <p>现在可以看见我</p>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

    <!-- 条件判断 -->
    <div v-if="Math.random() > 0.5">
      Sorry
    </div>
    <div v-else>
      Not sorry
    </div>

    <!-- 循环语句 -->
    <div>
      <p v-for="(site, i) in sites" v-bind:key="site">
        {{ site.name }} --- {{ i }}
      </p>
    </div>

    <!-- 循环整数 -->
    <ul>
      <li v-for="n in 10" v-bind:key="n">
        {{ n }}
      </li>
    </ul>
    <div>
      {{ message.split('').reverse().join('') }}
    </div>
    

  </div>
</template>

<script>
export default {
  name: 'app22',
  data () {
    return {
      msg: '欢迎来到 Vue.js',
      h2_title: 'H2大标题22',
      message: '<h1>菜鸟教程</h1>',
      seen: false,
      sites:[
        {name: 'Runoob'},
        {name: 'Google'},
        {name: 'Taobao'}
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <h2>我是APP组件 </h2>
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="about" tag="button" replace>关于</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="/user/+userId">我的</router-link>
    
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'laow2'
    }
  },
  methods: {
    homeClick() {
      console.log(" --- home");
      // 通过代码修改路由 vue-router
      this.$router.push('/home')
      // this.$router.replace('/home')

    },
    aboutClick() {
      console.log(" --- about");
      this.$router.push('/about')
      // this.$router.replace('/about')
    }
  }
}
</script>

<style>
/* .active {
  color: red;
} */
</style>
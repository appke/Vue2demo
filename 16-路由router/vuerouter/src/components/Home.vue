<template>
  <div>
    <h2>我是首页</h2>
    <p>首页，哈哈哈，嵌套组件</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    console.log('--- home created')
  },
  destroyed() {
    console.log('--- home destroyed')
  },
  methods: {

  }
};
</script>

<style>
</style>>

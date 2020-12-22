<template>
  <div id="app">
    <h2>我是首页 </h2>
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="about" tag="button" replace>关于</router-link>
    <router-link to="about" tag="li">关于</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.active {
  color: red;
}
</style>
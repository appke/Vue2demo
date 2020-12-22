<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <router-link to="/home">首页</router-link>
    <router-link to="about">关于</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

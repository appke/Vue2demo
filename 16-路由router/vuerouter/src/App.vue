<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="about" tag="button" replace>关于</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link :to="/user/+userId">我的</router-link>
    <router-link :to="{path:'/profile', query: {name: 'codermuk'}}">档案</router-link> -->

    <button @click="userClick">我的</button>
    <button @click="profileClick">档案</button>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "laow2",
    };
  },
  methods: {
    homeClick() {
      console.log(" --- home");
      // 通过代码修改路由 vue-router
      this.$router.push("/home");
      // this.$router.replace('/home')
    },
    aboutClick() {
      console.log(" --- about");
      this.$router.push("/about");
      // this.$router.replace('/about')
    },
    userClick() {
      this.$router.push("/user/" + this.userId);
      console.log(" --- user");
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "kobe",
          height: 1.88,
        },
      });
      console.log(" --- profile");
    },
  },
};
</script>

<style>
/* .active {
  color: red;
} */
</style>
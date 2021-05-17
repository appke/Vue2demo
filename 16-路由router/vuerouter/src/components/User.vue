<template>
  <div>
    <h2>Mine页面</h2>
    <p>我的，11111</p>
    <p>登陆用户: {{ userId }}</p>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userid
    }
  },
  methods: {
    btnClick() {
      console.log(this.$router);
      console.log(this.$route);
    }
  }
};
</script>

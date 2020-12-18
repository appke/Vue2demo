<template>
  <div>
    <h2>{{ message }}</h2>
    <p class="desc">{{ desc }}</p>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: "Hellow WebPack app",
      desc: "第一次开始vue页面，哈哈哈。出新手村",
    };
  },
  methods: {
    btnClick() {
      console.log('btnClick ----- ')
    }
  }
};
</script>

<style scoped>
.desc {
  color: green;
}
</style>
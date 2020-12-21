<template>
  <div>
    <p class="desc">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      desc: "我是Cpn组件，在组件里注册组件",
    };
  },
};
</script>

<style scoped>
.desc {
  color: purple;
}
</style>
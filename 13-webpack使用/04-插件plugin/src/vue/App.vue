<template>
  <div>
    <h2>{{ message }}</h2>
    <p class="desc">{{ desc }}</p>
    <!-- <button @click="btnClick">按钮</button> -->
    <!-- <Cpn></Cpn> -->
    <!-- <button @click="btnClick">按钮</button> -->

    <div>
          老师的webpack配置相关版本：
        webpack
        npm install webpack@3.6.0

        css-loader
        npm install css-loader@2.0.2 --save-dev

        style-loader
        npm install style-loader@0.23.1 --save-dev

        less-loader
        npm install --save-dev less-loader@4.1.0 less@3.9.0

        url-loader
        npm install --save-dev url-loader@1.1.2

        es6转换成es5
        npm install --save-dev babel-loader@7.1.5 babel-core@6.26.3 babel-preset-es2015@6.24.1

        Vue
        npm install vue@2.5.21 --save

  </div>

  </div>
</template>

<script>
import Cpn from "./Cpn.vue"

export default {
  name: "App",
  components: {
    Cpn,
  },
  data() {
    return {
      message: "Hellow WebPack app",
      desc: "第一次开始vue页面，哈哈哈。出新手村",
    };
  },
  methods: {
    btnClick() {
      console.log("btnClick ----- ")
    },
  },
};
</script>

<style scoped>
.desc {
  color: green;
}
</style>
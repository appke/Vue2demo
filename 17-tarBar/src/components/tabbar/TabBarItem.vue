<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    isActive: {
      // 当前处于活跃的路由
      // 传过来的path
      // /home -> item1(/home) = true
      // /home -> item1(/category) = false
      // /home -> item1(/shopcart) = false
      // /home -> item1(/profile) = false
      get() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      set(val){}
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.active {
  color: red;
}
</style>
<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      active-text-color="#ffd04b"
      background-color="#545c64"
      mode="horizontal"
      text-color="#fff"
    >
      <el-menu-item
        :index="''+routeIndex"
        :key="routeIndex"
        v-for="(route, routeIndex) in routes"
        @click="$router.push(route.path)"
      >
        {{ route.meta.title }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [],
      activeIndex: "0",
    };
  },

  created() {
    this.routes = this.$router.options.routes;
    this.activeIndex = '' + this.routes.findIndex((route) => route.path === this.$route.path)
  },

  methods: {}
};
</script>

<style lang="less" scoped>

</style>
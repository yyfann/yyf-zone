<template>
  <div>
    <!-- <iframe src="https://live.bilibili.com/76" frameborder="0"></iframe> -->
    <h2>我的最爱</h2>
    <iframe
      v-for="(src, srcIndex) in srcs"
      :key="srcIndex"
      frameborder="0"
      :src="src"
      width="50%"
      height="400px"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      srcs: [
        'https://news.qq.com/',
        'https://weibo.com/',
        'https://www.toutiao.com/'
      ]
    };
  },

  async mounted() {
    this.list = await this.$get("/list");
    console.log(this.list, "this.list");
  },

  methods: {}
};
</script>

<style scoped>
</style>
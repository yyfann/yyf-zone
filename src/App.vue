<template>
  <div>
    <navigation></navigation>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navigation from "./components/navigation";
export default {
  components: {
    navigation,
  },
  data() {
    return {
    };
  },

  created() {
  },

  methods: {}
};
</script>

<style scoped>


.content {
  margin-top: 10px;
  padding: 10px;
}
</style>

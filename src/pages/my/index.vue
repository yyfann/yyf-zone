<template>
  <div>
    <el-avatar
      :size="100"
      :src="circleUrl"
    ></el-avatar>
    <h2>{{ username || '没有登录, 弟弟!!! 不登录后悔~' }}</h2>

    <el-form
      :model="userForm"
      v-if="!username"
    >
      <el-form-item>
        <el-input
          placeholder="用户名"
          v-model="userForm.username"
        ></el-input>
        <el-input
          placeholder="密码"
          v-model="userForm.password"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-button
      @click="login"
      type="primary"
      v-if="!username"
    >登录</el-button>
    <el-button
      @click="register"
      v-if="!username"
    >注册</el-button>
    <el-button
      @click="logOut"
      v-if="username"
    >退出</el-button>
    <el-link
      :underline="false"
      href="http://www.yyfann.com:8010/"
      type="danger"
      v-if="username"
    >
      开始玩游戏!!
      <i class="el-icon-view el-icon--right"></i>
    </el-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      username: "",
      userForm: {
        username: "yyy",
        password: "456"
      }
    };
  },

  async mounted() {
    if (localStorage.getItem("token")) {
      this.getUser();
    }
  },

  methods: {
    register() {
      this.$post("/users/register", this.userForm);
    },
    async login() {
      const { token } = await this.$post("/users/login", this.userForm);
      localStorage.setItem("token", JSON.stringify(token));
      this.getUser();
    },
    async getUser() {
      const user = await this.$get("/users/getUser");
      this.username = user.username;
    },
    async logOut() {
      localStorage.removeItem("token");
      this.username = "";
    }
  }
};
</script>

<style scoped>
</style>
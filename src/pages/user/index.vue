<template>
  <div>
    <el-form
      :model="form"
      label-width="80px"
      ref="form"
    >
      <el-form-item label="名称">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          @click="createUser"
          type="primary"
        >立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="users"
      border
    >
      <el-table-column
        label="姓名"
        prop="username"
        width="180"
      ></el-table-column>
      <el-table-column
        label="密码"
        prop="password"
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{row}">
          <el-button
            @click="deleteUser(row)"
            type="danger"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      form: {
        username: "用户1",
        password: 123
      }
    };
  },

  async mounted() {
    this.getUsers();
  },

  methods: {
    async getUsers() {
      this.users = await this.$get("/users/getPerson");
    },

    async createUser() {
      await this.$post("/users/addPerson", this.form);
      this.getUsers();
    },

    async deleteUser(row) {
      await this.$post("/users/removePerson", {
        _id: row._id
      });
      this.getUsers();
    },
  }
};
</script>

<style scoped>
</style>
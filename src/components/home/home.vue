<template>
  <el-container class="content">
    <el-aside width="200px" class="aside">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :unique-opened="true"
        :router="true"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="user">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-check"></i>
            <span>echarts</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="echarts">图表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-goods"></i>
            <span>商品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span>数据管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header">
        <el-row>
          <el-col :span="4"
            ><div class="grid-content bg-purple">华苏</div></el-col
          >
          <el-col :span="18"
            ><div class="grid-content bg-purple-light">后台管理</div></el-col
          >
          <el-col :span="2"
            ><div class="grid-content bg-purple">
              <a href="#" @click="loginOut()">登出</a>
            </div></el-col
          >
        </el-row>
      </el-header>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    loginOut() {
      this.$router.push({ name: "login" });
      localStorage.clear("token");
      this.$message.info("登出成功");
    },
  },
  beforeCreate() {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      this.$router.push({ name: "login" });
    }
  },
};
</script>
<style scoped>
.content {
  height: 100%;
  background-color: #edeef3;
}
.aside {
  /* background-color: #545c64; */
}
.el-menu-vertical-demo {
  height: 100%;
}
.header {
  background-color: #545c64;
}
.grid-content {
  text-align: center;
  font-size: 24px;
  line-height: 50px;
  font-family: cursive;
  color: white;
}
.main {
  background-color: #edeef3;
}
</style>
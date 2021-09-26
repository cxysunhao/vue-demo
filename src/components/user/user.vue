<template>
  <el-card class="content">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-input
      placeholder="请输入内容"
      v-model="input3"
      class="input-with-select"
      @change="handel"
    >
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-button type="success">添加用户</el-button>

    <el-table :data="tableData" style="width: 100%" class="table">
      <el-table-column type="index" label="#" width="140"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="140"> </el-table-column>
      <el-table-column prop="address" label="邮箱"> </el-table-column>
      <el-table-column prop="address" label="电话"> </el-table-column>
      <el-table-column prop="address" label="创建时间"> </el-table-column>
      <el-table-column prop="address" label="用户操作"> </el-table-column>
      <el-table-column prop="address" label="状态"> </el-table-column>
    </el-table>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      input3: "111",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
//   watch() {},
  methods: {
    handel(val) {
      console.log(val);
    },
    // getTable() {
    //   axios().then((res) => {
    //     this.tableData = res;
    //   });
    // },
  },
  mounted() {
      console.log(this.input3);
    //   this.input3=232
    // this.getTable();
  },
};
</script>
<style>
.content {
  height: 100%;
}
.input-with-select {
  padding-top: 20px;
  width: 400px;
}
.table {
  margin-top: 20px;
}
</style>
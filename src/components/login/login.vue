<template>
  <div class="content">
    <el-form :model="formdata" label-width="150px" class="demo-ruleForm">
        <h2>用户登录</h2>
      <el-form-item label="用户名" >
        <el-input
          type="username"
          v-model="formdata.username"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" >
        <el-input
          type="password"
          v-model="formdata.password"
        ></el-input>
      </el-form-item>
      <el-button @click="handleLogin">
          anniu
      </el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formdata: {
        username: "",
        password: "",
      },
    };
  },
  methods:{
      handleLogin(){
        // console.log(localStorage.username);
       
        if(localStorage.username===this.formdata.username){
          localStorage.setItem('token',JSON.stringify(this.formdata) )
          this.$message.success('登录成功')
          this.$router.push({name:'home'})
          
        }
        
        console.log(this.formdata);
        // console.log();
        // this.$http.post('login',this.formdata).then(res=>{
        //     if(res.code===200){
        //         this.$router.push({name:'home'})
        //     }
        // }

        // )
      } 
  }
};
</script>
<style scoped>
.content{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
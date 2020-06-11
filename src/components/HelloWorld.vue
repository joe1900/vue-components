<!--
 * @Description: 登陆
 * @Date: 2019-12-04 11:38:58
 * @LastEditors: Ji Yinghao
 * @LastEditTime: 2019-12-04 18:42:23
 -->
<template>
  <div class="hello">
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <el-card class="box-card">
          <el-form
            :model="ruleForm"
            status-icon
            ref="ruleForm"
            label-width="0px"
            class="demo-ruleForm"
          >
            <el-form-item prop="text">
              <el-input type="text" v-model="ruleForm.userName" placeholder="登录账号" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input type="password" v-model="ruleForm.pass" placeholder="确认密码" autocomplete="off"></el-input>
            </el-form-item>
            <!-- <el-form-item label="年龄" prop="age">
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item> -->
            <el-form-item>
              <el-button style="width: 100%;" type="primary" @click="submitForm">提交</el-button>
              <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        userName: "admin",
        pass: "123456"
      }
    };
  },
  methods: {
    submitForm(){
      this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning',
          duration: 1000
        });
      this.$router.push({
        path:"about",
        query:{}
      })
      }
    }
};
</script>

<style>
.hello{
  overflow: hidden;
  padding-bottom: 10px;
}
.hello .el-row{
  margin-top: calc(50vh - 154px);
}
.hello .el-card__body {
    padding: 50px;
    padding-bottom: 28px;
}
</style>

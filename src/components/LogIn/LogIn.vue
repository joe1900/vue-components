<!--
 * @Description: 登陆
 * @Date: 2019-12-04 11:38:58
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-02 17:53:29
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

            <el-tooltip class="item" effect="light" content="6-16个字符（英文，数字，下划线）" placement="right-start">
              <el-form-item prop="text">
                <el-input type="text" v-model="ruleForm.userName" placeholder="登录账号" autocomplete="off"></el-input>
              </el-form-item>
            </el-tooltip>

            <el-tooltip class="item" effect="light" content="6-16个字符（英文，数字，下划线）" placement="right-start">
              <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm.pass" placeholder="确认密码" autocomplete="off"></el-input>
              </el-form-item>
            </el-tooltip>

            <el-tooltip class="item" effect="light" content="6为数字组合（若忘记请联系管理员）" placement="right-start">
                <el-form-item prop="text">
                  <el-input type="text" v-model="ruleForm.securityCode" placeholder="安全码" autocomplete="off"></el-input>
                </el-form-item>
            </el-tooltip>

            <el-form-item>
              <el-button style="width: 100%;" type="primary" class="magictime" ref="btn" @click="submitForm($event)">提交</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <div id="kkk"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        userName: "admin",
        pass: "123456",
        securityCode: '147258'
      }
    };
  },
  methods: {
    submitForm( event ){
      let dom = this.$refs.btn.$el;
      dom.classList.remove("vanishIn");
      setTimeout(() => {
        dom.classList.add("vanishIn");
      }, 100);
      this.$message({  message: '警告哦，这是一条警告消息',  type: 'warning',  duration: 1000  });
      return;
      this.$router.push({
        path:"/about",
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

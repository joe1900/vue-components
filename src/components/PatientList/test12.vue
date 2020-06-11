<!--
 * @Description: 抽屉
 * @Date: 2020-04-14 17:52:39
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-15 16:55:37
 -->
<template>
  <div class="test12">
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;"> 点我打开001 </el-button>
    <el-button @click="drawer1 = true" type="primary" style="margin-left: 16px;"> 点我打开002 </el-button>
    <el-drawer
      title="我是抽屉标题"
      :visible.sync="drawer"
      :with-header="true"
      size="960px"
      :show-close="true"
      :destroy-on-close="true"
      direction="ltr"
    >
      <div class="body-box">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
      </div>
    </el-drawer>
    <el-drawer
        title="我是抽屉标题"
        :visible.sync="drawer1"
        :with-header="true"
        size="960px"
        :show-close="true"
        :destroy-on-close="true"
        direction="rtl"
        >
        <span class="body-box">
            123000
            <el-input v-model="input" placeholder="请输入内容"></el-input>
        </span>
    </el-drawer>
  </div>
</template>
   
<script>
export default {
  name: "test12",
  components: {},
  data() {
    return {
      drawer: false,
      drawer1: false,
      input: ''
    };
  },
  computed: {},
  mounted: function() {},
  methods: {
    handleClose(done) {
        console.log( done );
      this.$confirm("还有未保存的工作哦确定关闭吗？")
        .then(_ => {
          done();
        })
        .catch(() => {});
    }
  },
  /* 离开当前组件时 */
  destroyed: function() {}
};
</script>
 
<style scoped lang="scss">
.test12 {
    height: 100%;
  .body-box {
    width: 100%;
    height: 100vh;
    overflow: auto;
    padding: 0 30px 50px 30px;
  }
}
</style>
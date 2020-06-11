<!--
 * @Description: copy - 复制
 * @Date: 2020-04-11 11:38:08
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-06-01 09:59:20
 -->
<template>
   <div class="test10">
      <Copy :content="content" @copyCallback="copyCallback">
          <el-button type="primary"> copy </el-button>
      </Copy> 
      <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="content">
</el-input>
   </div>
</template>
   
<script>
   export default {
       name: "test10",
       components: {},
       data () {
           return {
               content: "**copy**",
               textarea: ""
           }
       },
       computed: {},
       mounted: function() {},
       methods: {
           copyCallback(){
              this.$message({
          message: '恭喜你，copy 成功！',
          type: 'success'
        });
           }
       },
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
 .test10{

 }
</style>
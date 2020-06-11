<!--
 * @Description: emit
 * @Date: 2020-05-14 18:13:24
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-05-14 18:33:30
 -->

<template>
   <div class="emitChild">
       <p> 我是子组件 </p>
       <el-input v-model="input" placeholder="请输入内容" style="width: 240px;"></el-input> &nbsp; 
       <el-button @click="btn"> 默认按钮 </el-button>
   </div>
</template>
   
<script>
   export default {
       name: "emitChild",
       components: {},
       data () {
           return {
               input: ''
           }
       },
       computed: {},
       mounted: function() {},
       methods: {
           btn(){
                  console.log( this )
               this.$emit('emit_', this.input);
           }
       },
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
 .emitChild{
     border: solid 1px red;
     padding: 20px;
     margin: 20px;
 }
</style>
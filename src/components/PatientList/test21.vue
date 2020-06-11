<!--
 * @Description: 
 * @Date: 2020-04-22 14:00:54
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-22 14:18:52
 -->
<template>
   <div class="test21">
       <p>  {{ $store.state.name }} </p>
       <p>
           <el-button round @click="modify" >vuex状态修改</el-button>
       </p>
   </div>
</template>
   
<script>
   export default {
       name: "test21",
       components: {},
       data () {
           return {}
       },
       computed: {},
       mounted: function() {},
       methods: {
           modify(){
            //    console.log( this.$store.state.name = 'jiyinghao' );
            this.$store.commit("modifyName",'jiyinghao***');
           }
       },
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
 .test21{
     
 }
</style>
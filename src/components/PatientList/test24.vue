<!--
 * @Description: 混入 (mixins)
 * @Date: 2020-04-29 17:35:17
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-05-11 10:34:35
 -->

<template>
   <div class="test24">
       组件24  -  混入： 是一种分发 Vue 组件中可复用功能的一种（非常灵活的）方式
    <Com1 />
    <Com2 />
    <el-input v-model="input" placeholder="请输入内容" ></el-input>
    <input type="text" @keyup.v="ent_">
   </div>
</template>
   
<script>
import Com1 from './components/component1.vue';
import Com2 from './components/component2.vue';
   export default {
       name: "test24",
       components: {
           Com1,
           Com2
       },
       data () {
           return {
               input: ''
           }
       },
       computed: {},
       mounted: function() {},
       methods: {
           ent_( event ){
               console.log( `event:`, event );
           }
       },
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
 .test24{
     
 }
</style>
<!--
 * @Description: emit
 * @Date: 2020-05-21 16:44:41
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-05-21 16:47:11
--> 

<template>
   <div class="emit1">
   <h3> emit1 - {{ input }} </h3>
   </div>
</template>
   
<script>
   export default {
       name: "emit1",
       components: {},
       data () {
           return {
               input: ''
           }
       },
       computed: {},
       mounted: function() {},
       methods: {
           emitFun( value ){
               this.input = value;
           }
       },
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
 .emit1{
     
 }
</style>
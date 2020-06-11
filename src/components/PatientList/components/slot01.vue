<!--
 * @Description: 匿名插槽
 * @Date: 2020-05-20 15:21:51
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-05-20 15:23:00
--> 

<template>
   <div class="slot001">
       <slot>我是默认值</slot>
   </div>
</template>
   
<script>
   export default {
       name: "slot001",
       components: {},
       data () {
           return {}
       },
       computed: {},
       mounted: function() {},
       methods: {},
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
.slot001{

 }
</style>
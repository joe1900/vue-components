<!--
 * @Description: 具名插槽
 * @Date: 2020-05-20 15:40:00
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-05-20 15:43:47
--> 

<template>
   <div class="slot02">
       <slot name="todo01"> <p> 我是默认值 - todo01 </p></slot>
       <slot name="todo02"> <p> 我是默认值 - todo02 </p> </slot>
       <slot name="todo03"> <p> 我是默认值 - todo03 </p> </slot>
   </div>
</template>
   
<script>
   export default {
       name: "slot02",
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
 .slot02{
     
 }
</style>

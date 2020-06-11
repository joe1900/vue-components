<!--
 * @Description: 
 * @Date: 2020-04-29 18:13:28
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-29 18:27:30
 -->
<template>
   <div class="com2">
    <p>组件2: {{ num }} </p>
   </div>
</template>
   
<script>
   import {myMixin} from './mixins.js'
   export default {
       mixins:[ myMixin ],
       name: "com2",
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
 .com2{
     
 }
</style>
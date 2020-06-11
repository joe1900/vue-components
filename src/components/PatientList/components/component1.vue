<!--
 * @Description: 
 * @Date: 2020-04-29 18:13:16
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-05-11 10:37:26
 -->
<template>
   <div class="com1">
    <p>组件1: {{ num }} </p>
   </div>
</template>
   
<script>
import {myMixin} from './mixins.js'
   export default {
       mixins:[ myMixin ],
       name: "com1",
       components: {},
       data () {
           return {}
       },
       computed: {},
       mounted: function() {
           this.num = this.num+9
       },
       methods: {},
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
 .com1{  }
</style>
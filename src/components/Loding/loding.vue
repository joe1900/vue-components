<!--
 * @Description: 自定义组件
 * @Date: 2020-04-20 15:32:43
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-20 16:00:35
 -->

<template>
    <div class="loading-box">
        {{ test }} Loading...
    </div>
</template>
   
<script>
   export default {
       name: "loading-box",
       props:[
           "test"
       ],
       components: {},
       data () {
           return {}
       },
       computed: {},
       mounted: function() {},
       methods: {},
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
 .loading-box{
     
 }
</style>
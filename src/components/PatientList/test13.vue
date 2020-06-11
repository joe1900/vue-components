<!--
 * @Description: 3D 按钮
 * @Date: 2020-04-16 15:08:16
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-16 15:21:09
 -->
<template>
   <div class="test13">
       <br>
       <ButtonThree 
                   type="colorful" 
                   width="580px"
                   height="45px" 
                   bgColor='rgb(171, 2, 185)'
                   colorful='#fff'
                   round='3px'
                   :autofocus='true'
        >
            colorful
        </ButtonThree>
        <br>
        <ButtonThree 
                   type="threeBtn" 
                   width="580px"
                   height="45px" 
                   bgColor='rgb(171, 2, 185)'
                   round='3'
                   :autofocus='true'
        >
            threeBtn
        </ButtonThree>
        <br>
        <ButtonThree 
                   type="haloBtn" 
                   width="80px"
                   height="80px" 
                   bgColor='rgb(171, 2, 185)'
                   round='100%'
                   :autofocus='true'
        >
            haloBtn
        </ButtonThree>
   </div>
</template>
   
<script>
   export default {
       name: "test13",
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
 .test13{
     
 }
</style>
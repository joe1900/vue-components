<!--
 * @Description: test3
 * @Date: 2020-03-09 10:24:15
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-03-28 19:29:50
 -->

<template>
   <div class="test3">
       test3
       <vue-scratch-card 
            element-id='scratchWrap'
            :ratio=0.5
            :move-radius=10
            cover-color="#000"
            :start-callback=startCallback
            :clear-callback=clearCallback
            resul-img="https://pic1.zhimg.com/50/v2-0ddee254f0dca6a0d2a76374bf0e3345_hd.jpg"
        >
            <div>
                <h1> test3test3test3</h1>
            </div>
        </vue-scratch-card>
   </div>
</template>
   
<script>

   export default {
       name: "test3",
       components: { },
       data () {
           return {}
       },
       computed: {},
       mounted: function() {
           this.$message({
          message: 'test3',
          type: 'warning',
          duration: 1000
        });
       },
       methods: {
           startCallback(){
          console.log('抽奖成功！')
        },
        clearCallback(){
          console.log('清除完毕！')
        }
       },
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
 .test3{
     #scratchWrap{
         overflow: hidden;
        h1{
            line-height: 165px;
        }
     }
 }
</style>
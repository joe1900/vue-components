<!--
 * @Description: 自定义滚动条
 * @Date: 2020-04-08 11:47:41
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-08 14:55:20
 -->
<template>
   <div class="test6">
        <!-- <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle"> -->
            <img src="https://pic2.zhimg.com/v2-2f798a03a0ba3ade40239c595264c6dd_540x450.jpeg" height="720" width="1280" alt="">
        <!-- </vue-custom-scrollbar> -->
        <div class="box">
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
            <p>i</p>
        </div>
   </div>
</template>

<script>
// 此插件滚动卡顿 - LJ
import vueCustomScrollbar from 'vue-custom-scrollbar'
   export default {
       name: "test6",
       components: {
           vueCustomScrollbar
       },
       data () {
           return {
               settings: {
                    maxScrollbarLength: 150
                }
           }
       },
       computed: {},
       mounted: function() {},
       methods: {
            scrollHanle(evt) {
                console.log(evt)
            }
       },
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style lang="scss">
/*滚动条整体样式*/
body::-webkit-scrollbar {
        width: 5px;
}
body::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.4);
}
/*滚动条里面轨道*/
body::-webkit-scrollbar-track {
        border-radius: 10px;
        background: rgb(255, 255, 255);
}
.test6{
    overflow: hidden;
    position: relative;
    margin: auto;
    .box{
        height: 300px;
        width: 300px;
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 0;
        overflow-y: auto;
    }
    img{
        height: 300vh;
        width: 100vw;
    }
}
</style>
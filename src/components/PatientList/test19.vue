<!--
 * @Description: npm 包
 * @Date: 2020-04-21 14:37:27
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-21 16:17:29
 -->

<template>
   <div class="test19">
       <ParallaxImage :config='config'></ParallaxImage>
   </div>
</template>
   
<script>
import ParallaxImage from 'vue-parallax-image'
   export default {
       name: "test19",
       components: { ParallaxImage },
       data () {
           return {
               config:{
                    width:'100%',                                   // 底色图的宽度
                    height: '500px',                                // 底色图的高度
                    basemap: require('../../assets/img/0.jpg'),     // 底色图的路径
                    imgList:[                                       // 视差图片列表
                        {
                            img: require('../../assets/img/1.png'), // 图片路径或者链接
                            width:  '200px',                        // 图片宽度
                            height: '200px',                        // 图片高度
                            left:   '60%',                          // 图片相对位置 - left
                            top:    '25%'                           // 图片相对位置 - top
                        },
                        {
                            img: require('../../assets/img/2.png'),
                            width:  '200px',
                            height: '100px',
                            left:'40%',
                            top: '45%'
                        },
                        {
                            img: require('../../assets/img/3.png'),
                            width:  '100%',
                            height: '100%',
                            left:'0%',
                            top: '0%'
                        },
                        {
                            img: require('../../assets/img/4.png'),
                            width:  '',
                            height: '',
                            left:'5%',
                            top: '0%'
                        }
                    ]
                }
           }
       },
       computed: {},
       mounted: function() {
           console.log( 'name', ParallaxImage )
       },
       methods: {},
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
 .test19{
     
 }
</style>    
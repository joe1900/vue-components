<!--
 * @Description: 组件的形式使用
 * @Date: 2020-04-21 10:25:29
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-21 14:37:15
 -->

 <template>
    <div class="test18">
    <test17 :config='config'/>
    </div>
 </template>
    
 <script>
     import test17 from './test17'
    export default {
        name: "test18",
        components: {test17},
        data () {
            return {
                config:{
                    width:'100%',
                    height: '500px',
                    basemap: require('../../assets/img/0.jpg'),
                    imgList:[
                        {
                            img: require('../../assets/img/1.png'),
                            width:  '200px',
                            height: '200px',
                            left:   '60%',
                            top:    '25%'
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
                        },
                    ]
                }
            }
        },
        computed: {},
        mounted: function() {
      
        },
        methods: {},
        /* 离开当前组件时 */
        destroyed: function () {}
    }
 </script>
  
 <style scoped lang="scss">
  .test18{
      
  }
 </style>
 <!-- this.$parallaxImage.msg(); -->
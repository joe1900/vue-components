<!--
 * @Description: 颜色和拟物背景
 * @Date: 2020-05-12 17:41:22
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-05-13 11:46:42
 -->
 <template>
    <div class="test27">
        
    </div>
 </template>
    
 <script>
     import Colors from '../../assets/json/colors.json';
     import {color} from '../../assets/json/colors.js';
    export default {
        name: "test27",
        components: {},
        data () {
            return {
            }
        },
        computed: {},
        mounted: function() {
            console.log( Colors );
            console.log( color );
        },
        methods: {},
        /* 离开当前组件时 */
        destroyed: function () {}
    }
 </script>
  
 <style scoped lang="scss">
  .test27{
      
  }
 </style>


<!--
 * @Description: 动态路由
 * @Date: 2020-05-22 10:28:46
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-06-06 16:58:43
--> 
//点击跳转
<template>
 <div>
  点击新增 动态路由: "secondRouter"
  <br/>
  <el-button @click="srouter" type="primary"> 新增动态路由 </el-button>

 </div>
</template>

<script>
// import router from 'vue-router';
// import {constantRouterMap} from '@/router'
import JSON from '../../json.json';
export default {
 name: 'kk',
 mounted(){
    //  console.log( constantRouterMap );
    this.json();
 },
 data () {
  return {
   msg: 'Welcome to Your Vue.js App',
   text: false
  }
 },
 methods:{

   json(){
     console.log( JSON );
     let num = 0;
      
            JSON.forEach((item,index)=>{
                    num += item.strength;
            })
      
        console.log( num/JSON.length )
   },
  srouter(){
    /* 配置一个路由 */   
    let newRoutes=[{
            path: '/secondRouter',
            name: 'secondRouter',
            component: () => import ('./test29.vue')
    }];
    /* 添加该路由 */ 
    this.$router.addRoutes([...newRoutes]);
    /* 跳转该路由 */ 
    this.$router.push({path:'/secondRouter'});
  }
 }
}
</script>
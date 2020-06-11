<!--
 * @Description: 
 * @Date: 2019-12-04 11:38:58
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-05-12 17:48:31
 -->
<template>
  <div id="app">
    <el-select v-model="value" placeholder="请选择" @change="url">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  components: {
    // HelloWorld
  },
  data() {
    return {
      tapy: "我是根组件",
      options: [
        {  value: "test1",  label: "test1"  },
        {  value: "test2",  label: "test2"  },
        {  value: "test3",  label: "test3"  },
        {  value: "test4",  label: "test4"  },
        {  value: "test5",  label: "test5"  },
        {  value: "test6",  label: "test6"  },
        {  value: "test7",  label: "test7"  },
        {  value: "test8",  label: "test8"  },
        {  value: "test9",  label: "test9"  },
        {  value: "test10",  label: "test10"  },
        {  value: "test11",  label: "test11"  },
        {  value: "test12",  label: "test12"  },
        {  value: "test13",  label: "test13"  },
        {  value: "test14",  label: "test14"  },
        {  value: "test15",  label: "test15"  },
        {  value: "test16",  label: "test16"  },
        {  value: "test17",  label: "test17"  },
        {  value: "test18",  label: "test18"  },
        {  value: "test19",  label: "test19"  },
        {  value: "test20",  label: "test20"  },
        {  value: "test21",  label: "test21"  },
        {  value: "test22",  label: "test22"  },
        {  value: "test23",  label: "test23"  },
        {  value: "test24",  label: "test24"  },
        {  value: "test25",  label: "test25"  },
        {  value: "test26",  label: "test26"  },
        {  value: "test27",  label: "test27"  },
        {  value: "test28",  label: "test28"  },
        {  value: "test29",  label: "test29"  },
        {  value: "test30",  label: "test30"  },
        {  value: "test31",  label: "test31"  },
        {  value: "test32",  label: "test32"  },
        {  value: "test33",  label: "test33"  },


      ],
      value: ""
    };
  },
  methods: {
    url( ev ){
      console.log( ev )
      this.$router.push({
        path: ev
      });
      }
  },
};
</script>
  

<style>
/* 加载第三方库的CSS文件 */
@import url("https://cdn.bootcss.com/animate.css/3.5.1/animate.min.css");
@import "./assets/magic.css";
html,body{
  height: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 100vw;
  overflow: hidden;
}

#app {
  height: 100%;
}
.animated{
  animation-duration: 0.2s;
}
input,button,select,textarea,span{outline:none;}
</style>

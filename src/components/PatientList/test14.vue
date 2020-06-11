<!--
 * @Description: 
 * @Date: 2020-04-16 15:35:20
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-16 16:04:38
 -->
<template>
  <div class="test14">
        <!-- <el-radio v-model="radio" label="color"  >{{`item`}}</el-radio>
        <el-radio v-model="radio" label="ball"  >{{`item`}}</el-radio> -->

        <el-radio v-model="radio" :label="item" v-for="(item, index) in list" :key="index" @change="ba" >{{ item }}</el-radio>

        <particles-bg :type="radio" :bg="true" :config="config" v-if="state" />
  </div>
</template>
   
<script>
import { ParticlesBg } from "particles-bg-vue";
   export default {
       name: "test14",
       components: {
           ParticlesBg
       },
       data () {
           return {
               config: {
                    num: [4, 7],
                    rps: 0.1,
                    radius: [5, 40],
                    life: [1.5, 3],
                    v: [2, 3],
                    tha: [-30, 30],
                    // body: icon,
                    alpha: [0.6, 0],
                    scale: [0.1, 0.4],
                    position: "all",
                    cross: "dead",
                    random: 1
               },
               list:[
                    "color",
                    "ball",
                    "lines",
                    "thick",
                    "circle",
                    "cobweb",
                    "polygon",
                    "square",
                    "tadpole",
                    "fountain",
                    "random",
                    "custom"
                ],
                radio: "color",
                state: true
           }
       },
       computed: {},
       mounted: function() {},
       methods: {
           ba( item ){
               this.state = false;
               console.log( item );
               setTimeout(() => {
                   this.state = true;
               }, 500);
           }
       },
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
.test14 {
}
</style>
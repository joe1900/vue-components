<!--
 * @Description: 图片加载中占位图和失败图
 * @Date: 2020-04-14 14:35:21
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-14 15:57:57
 -->
<template>
  <div class="test11">
    <p>图片懒加载示例：</p>
    <p>1. 图片路径正确</p>
    <img class="item-pic" v-lazy="picUrl" :key="0" />
    <p>2. 图片路径错误</p>
    <div v-lazy:background-image="picUrl1" :key="1"></div>
    <p>3. 懒加载 </p>
    <div style="height: 1200px;"></div>
    <div v-lazy:background-image="picUrl2" :key="2"></div>
  </div>
</template>
   
<script>
export default {
  name: "test11",
  components: {},
  data() {
    return {
      picUrl: "http://www.hiensor.net:8083/group/hisens_main/messages/images/20200413/13/39/3/c8acc49a87f5e2ce69a5d56145df09a8.png?download=0",
      picUrl1: "http://www.hiensor.net:8083/group/hisens_main/messages/images/20200413/13/39/3/c8acc49a87f5e2ce69a5d56145df09a80.png?download=0",
      picUrl2: "http://www.hiensor.net:8083/group/hisens_main/messages/images/20200413/13/39/3/c8acc49a87f5e2ce69a5d56145df09a8.png?download=0"
    };
  },
  computed: {},
  mounted: function() {},
  methods: {},
  /* 离开当前组件时 */
  destroyed: function() {}
};
</script>
 
<style scoped lang="scss">
.test11 {
  img {
    width: 300px;
    height: 300px;
  }
  > div {
    width: 300px;
    height: 300px;
    background-size: 100% 100%;
  }
}
</style>
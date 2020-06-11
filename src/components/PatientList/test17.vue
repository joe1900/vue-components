<!--
 * @Description: 鼠标移动视差效果
 * @Date: 2020-04-20 18:06:21
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-22 15:00:03
 -->
<template>
<p> 见test18 </p>
  <!-- <div
    class="test17"
    :style="{ width: config.width, height: config.height,'background-image': `url(${config.basemap})` }"
    @mousemove="ScrollBG($event)"
  >
    <li style="position: absolute;top:0" :style="{ width: config.width, height: config.height,'z-index': 0 }">
            <img style="width: 100%; height: 100%" :src="config.basemap" alt />
    </li>
    <ul id="mousemove" :style="{ width: config.width, height: config.height, }">
      <li
        :style="{'z-index': index+1, left: item.left, top: item.top,width: item.width, height: item.height}"
        v-for="(item, index) in config.imgList"
        :key="index"
      >
        <img :style="{width: '100%', height: '100%'}" :src="item.img" alt />
      </li>
      <li class="pic-zaijian" style="z-index: 1;">
            <img src="../../assets/img/1.png" alt />
        </li>
        <li class="pic-11y" style="z-index: 2;">
            <img src="../../assets/img/2.png" alt />
        </li>
        <li class="pic-joy" style="z-index: 3;">
            <img src="../../assets/img/3.png" alt />
        </li>
        <li class="pic-light" style="z-index: 4;">
            <img src="../../assets/img/4.png" alt />
      </li>
    </ul>
  </div> -->
</template>
   
<script>
export default {
  name: "test17",
  props: ["config"],
  components: {},
  data() {
    return {
    };
  },
  computed: {},
  mounted: function() {
    console.log(this.config);
  },
  methods: {
    ScrollBG(event) {
      //定义滚动背景容器变量
      let oUl = event.path[2],
        oLi = oUl.getElementsByTagName("li"),
        // 获取当前窗口的尺寸并改变其中心为原点坐标，也可以改为仅获取指定层的坐标:oUl.offsetWidth
        x = document.body.offsetWidth / 2,
        y = document.body.offsetHeight / 2,
        // 获取鼠标在当前窗口内的坐标值，也可以改为获取指定层的坐标:event.offsetX
        mx = event.clientX,
        my = event.clientY;

      //开始为每个要动的元素设置左边距和上边距，以每个元素的不同zIndex值来区别移动量
      for (var index = 0; index < oLi.length; index++) {
        //左边距和上边距的值可以随意调整
        oLi[index].style.marginLeft = `${((x - mx) / 150) *
          oLi[index].style.zIndex}px`;
        oLi[index].style.marginTop = `${((y - my) / 110) *
          oLi[index].style.zIndex}px`;
      }
    },
    /* 离开当前组件时 */
    destroyed: function() {}
  }
};
</script>
 
<style scoped lang="scss">
.test17 {
  overflow: hidden;
  ul {
    display: block;
    box-sizing: border-box;
    position: relative;
    li {
      list-style-type: none;
      padding: 0;
      margin: 0;
      list-style-type: none;
      position: absolute;
      top: 0;
    }
  }
  #mousemove {
    height: 100%;
    width: 100%;
  }
}
</style>
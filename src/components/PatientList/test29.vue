<!--
 * @Description: 插槽
 * @Date: 2020-05-20 11:35:33
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-05-21 16:54:02
--> 
<template>
  <div class="test29">
    <el-button round>圆角按钮</el-button>
    <el-button type="primary" :loading="loading" @click="btn">{{ loading }}</el-button>
    <el-button type="danger" icon="el-icon-delete" circle :loading="loading" @click="btn"></el-button>

    <!--  -->
    <P>插槽分类</P>
    <p>
      插槽的作用：子组件中的提供给父组件使用的一个占位符，用
      <code>&lt; slot &gt; &lt;/ slot &gt;</code> 表示，父组件可以在这个占位符中填充任何模板代码
    </p>
    <p>插槽一共就三大类</p>
    <p></p>
    <p></p>
    <p></p>

    <h3>1. 匿名插槽(也叫默认插槽): 没有命名,有且只有一个</h3>
    <Slot01>
      <template v-slot:default>
        从父组件中添加的任意内容
        <p>我是匿名插槽</p>
      </template>
    </Slot01>

    <h3>2.具名插槽: 相对匿名插槽组件slot标签带name命名的</h3>
    <Slot02>
      <template v-slot:todo02>
        <p>从父组件中添加的任意内容,我是匿名插槽</p>
      </template>
    </Slot02>

    <h3>3.作用域插槽: 子组件内数据可以被父页面拿到(解决了数据只能从父页面传递给子组件)</h3>
    <slot03>
      <template v-slot:todo04="slotProps_">{{ slotProps_ }} - {{slotProps_.user.firstName}}</template>
    </slot03>
  </div>
</template>
   
<script>
import Slot01 from "./components/slot01.vue";
import Slot02 from "./components/slot02.vue";
import Slot03 from "./components/slot03.vue";
export default {
  name: "test29",
  components: {
    Slot01,
    Slot02,
    Slot03
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {},
  mounted: function() {
    
  },
  methods: {
      btn(){
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
          }, 2500);
      }
  },
  /* 离开当前组件时 */
  destroyed: function() {}
};
</script>
 
<style scoped lang="scss">
.test29 /deep/ .el-button {

}
code {
  color: #fff;
  background-color: #333;
  padding: 5px 5px 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  transition: all 0.3s;
  position: relative;
  top: -2px;
}
code:hover{
    cursor:pointer;
    color: #222;
    background-color: navajowhite;
}
.test29{
    padding: 30px 60px;
}
</style>
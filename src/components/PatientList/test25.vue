<!--
 * @Description: 
 * @Date: 2020-04-30 17:52:17
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-30 18:54:39
 -->
<template>
  <div class="test25">
    <p v-for="(item, index) in data" :key="index"> {{ item.name }}:{{ item.age }} </p>
    <button @click="add"> 改变 index = 0 的列表 </button>
    <button @click="add_"> 改变 index = 0 的列表的属性 </button>
    <p> {{ m.name }}: {{ m.age }} </p>
    <button @click="mage"> m.age </button>
    <input type="text" v-focus placeholder="自动获取焦点的指令">
  </div>
</template>
 
<script>
/*
    this.$set 解决：
    为data中的某一个对象添加一个属性和删除，由于受JavaScript的限制，视图层不会响应该数据的变化问题。
    this.$delete 和 this.$set
    删除一个属性触发视图层变化
*/ 
export default {
  name: "test25",
  components: {},
  data() {
    return {
        data:[
            {name:'ji',age: 17},
            {name:'ying',age: 18},
            {name:'hao',age: 19},
            {name:'$$$$$$',age: 20}
        ],
        m:{
            name: 'jiiiiii'
        }
    };
  },
  computed: {},
  mounted: function() {
  },
  methods: {
      add(){
        // this.data[0] = {name:'ji@@@',age: 27};
        this.$set(this.data,2,{name:'ji@@@',age: 27})
        console.log( this.data )
      },
      add_(){
          this.data[0].name = 'ji@@@';
          this.data.push( {name:'ji@@@',age: 27} )
      },
      mage(){
        // 不起作用
        // this.m.age = 15;
        // 有作用
        this.$set( this.m,'age',15 )
        console.log( this.m )
      }
  },
  /* 离开当前组件时 */
  destroyed: function() {}
};
</script>
 
<style scoped lang="scss">
.test25 {
}
</style>
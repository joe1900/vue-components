<!--
 * @Description: 
 * @Date: 2019-12-04 11:38:58
 * @LastEditors: Ji Yinghao
 * @LastEditTime: 2019-12-04 17:35:27
 -->
<template>
  <div class="about">
    <Side />
  </div>
</template>
<script>
import Side from '../components/Side/Side.vue'
export default {
  components:{
    Side
  },
  data() {
    return {
      
    }
  },
}
</script>


<style lang="scss">
  .about{
    height: 100%;
    >div{
      height: calc( 100% - 65px);
    }
  }
</style>
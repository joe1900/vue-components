<!--
 * @Description: 
 * @Date: 2019-12-04 11:38:58
 * @LastEditors: Ji Yinghao
 * @LastEditTime: 2019-12-05 14:49:34
 -->
<template>
  <div class="home">
    <HelloWorld Andromeda="Astronautics across the sea of ​​stars."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

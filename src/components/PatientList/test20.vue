<!--
 * @Description: https://www.npmjs.com/package/@fortawesome/vue-fontawesome
 * @Date: 2020-04-22 11:04:03
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-22 14:19:09
 -->
<template>
  <div class="test20">
    <font-awesome-icon icon="user-secret" />
    <font-awesome-icon icon="address-card" />

    <vue-star-plus v-model="active" color="#ff0000" class="i-star__component">
        <span slot="icon" class="i-star__text">{{ active ? '❤️' : '🤍' }}</span>
    </vue-star-plus>

    <p>  {{ $store.state.name }} </p>

  </div>
</template>

   
<script>
export default {
  name: "test20",
  components: {},
  data() {
    return {
      active: false
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
.test20 {
  .i-star__component {
    left: 50%;
    margin-left: -50px;
  }
  .i-star__text {
    font-size: 25px;
    user-select: none;
  }
}
</style>
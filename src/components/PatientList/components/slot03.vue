<!--
 * @Description: 作用域插槽
 * @Date: 2020-05-20 15:49:58
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-05-20 15:56:33
--> 

<template>
   <div class="slot03">
        <slot name="todo04" :user="user" :test="test">
            {{ user.lastName }}
        </slot> 
   </div>
</template>
   
<script>
   export default {
       name: "slot03",
       components: {},
       data () {
           return {
               user:{
                    lastName:"Zhang",
                    firstName:"yue"
               },
               test:[1,2,3,4]
           }
       },
       computed: {},
       mounted: function() {},
       methods: {},
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
.slot03{
    
}
</style>
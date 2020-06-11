<!--
 * @Description: $emit
 * @Date: 2020-05-14 18:12:42
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-05-21 16:47:43
 -->

 <template>
    <div class="emit">
        <p> 我是父组件 </p>
        <p> $emit - 使用  【 父子组件传值 porps 和 $emit 基本可以满足所有父子组件通讯需求！ 】</p>
        <p> 关于父子通讯的方式有很多种，那么其中也包含了$parent 和 $children </p>
        <Emit @emit_="ooo" />
        {{ name }}
        <Emit1 />
    </div>
 </template>
    
 <script>
    import Emit from './components/emit.vue';
    import Emit1 from './components/emit1.vue';
    export default {
        name: "emit",
        components: {
            Emit,
            Emit1
        },
        data () {
            return {
                name: 'ooo'
            }
        },
        computed: {},
        mounted: function() {
            console.log( this.$children );
        },
        methods: {
            ooo(name){
                console.log( name );
                this.name = name;
            }
        },
        /* 离开当前组件时 */
        destroyed: function () {}
    }
 </script>
  
 <style scoped lang="scss">
  .emit{
      border: solid 1px #000;
      padding: 20px;
      margin: 20px;
  }
 </style>

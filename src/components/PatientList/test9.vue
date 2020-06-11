<!--
 * @Description: 时间过滤器插件
 * @Date: 2020-04-11 11:38:08
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-11 15:44:43
 -->
<template>
   <div class="test9">
       <span>{{ new Date() | moment("YYYY") }}</span>
       <!-- <span>{{ new Date() | moment('timezone', 'America/Los_Angeles', 'LLLL ss')}}</span> -->
        <br>
        <p>字符串过滤器</p>
        <p> {{ msg | capitalize }} </p>
        <p> {{ msg | uppercase }} </p>
        <p> {{ msg1 | placeholder('占位文本！') }} </p>
        <p> {{ msg | truncate(5) }} </p>
        <p> 数字过滤器: </p>
        <p>123456 => {{ 123456 | number('0,0.00') }} </p>
        <p>12345.67 => {{ 12345.67 | number('0.00000') }}</p>
        <p>123456 => {{ 123456 | number('+0') }} </p>
        <p>123456 => {{ 123456 | number('-0') }}</p>
        <p>123456 => {{ 123456 | number('0a') }} </p>
        <p>123456 => {{ 123456 | number('0 a') }} </p>
        <p>123456789 => {{ 123456789 | number('0a') }} </p>
        <p>1234567 => {{ 1234567 | number('0,0', { thousandsSeparator: ' ' }) }} </p>
        <p>12345.67 => {{ 12345.67 | number('0.00', { decimalSeparator: '点' }) }}</p>
        <p>2000000000 => {{ 2000000000 | bytes(4) }} </p>
        <p> 大小： </p>
        <p>0.974878234 => {{ 0.974878234 | percent(3) }} </p>
        <p> 货币： </p>
        <p>123456 => {{ 123456 | currency }}</p>
        <p>123456 => {{ 123456 | currency('￥') }}</p>
        <p> 复数： </p>
        <p>100 => {{ 100 | pluralize('复数') }} </p>
        <p> 限制： </p>
        <p>
            <!-- <span v-for="item in limitBy(items, 10)" :key="item"> {{ item }} </span> -->
        </p>

            <!-- <div v-for="item in filterBy(items, 'hello')" :key="item"></div> -->
        <p> {{this.$options.filters.currency(100)}} </p>

        <p> 相对时间： </p>
        <p> {{ date_c(someDate) }} </p>
   </div>
</template>
   
<script>
   export default {
       name: "test9",
       components: {},
       data () {
           return {
               someDate: 1586573960000,
               msg:'jiyinghao',
               msg1:'',
               items: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
           }
       },
       computed: {
           date_c: ()=>{
               return function(value) {
                    value = new Date( value-946656000000 );
                    return this.$momentAgo(value).ago();
               }
           }
       },
       filters: {
           date: (value,then)=>{
               value = new Date( value );
               console.log( then )
               return then.$momentAgo(value).ago();
           }
       },
       mounted: function() {
           console.log( this.$momentAgo(new Date( this.someDate )).ago() )
           console.log( new Date( this.someDate ) )
       },
       methods: {},
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
 .test9{
     
 }
</style>
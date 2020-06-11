<!--
 * @Description: QR
 * @Date: 2020-06-08 19:07:31
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-06-09 16:09:04
--> 

<template>
   <div class="QR">
       <el-input v-model="value" placeholder="字符串" style="width: 300px;"></el-input>
       <br>
       <br>
       <el-select v-model="foreground" placeholder="QR颜色" @change="change_" style="width: 300px;">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
       <br>
       <br>
       <div class="block">
            <el-color-picker v-model="foreground" @change="colorFun"></el-color-picker>
       </div>
       <br>
       <br>
       <qrcode-vue class="QR_IMG" :style="{'border-color': foreground}" :value="value" :size="size" :level="level" :foreground="foreground" :background="background" :renderAs="renderAs"></qrcode-vue>
       <p class="QR_URL">{{ value }}</p>
       <p class="QR_TEXT"> {{ value }} </p>
   </div>
</template>
   
<script>
import QrcodeVue from 'qrcode.vue'
   export default {
       name: "QR",
       components: {
           QrcodeVue
       },
       data () {
           return {
                value: 'https://example.com', // 生成字符串
                size: 300, // 二维码大小
                level: 'H', // 纠错等级 'L', 'M', 'Q', 'H'
                foreground: '#1B5E20', // 小方块的颜色
                background: '#fff', // 背景颜色
                renderAs: 'canvas', // Generate QRcode as canvas or svg.
                /* 设定颜色 */ 
                options: [
                    { value: '#D50000', label: 'red accent-4' },
                    { value: '#C51162', label: 'pink accent-4' },
                    { value: '#AA00FF', label: 'purple accent-4' },
                    { value: '#311B92', label: 'deep-purple darken-4' },
                    { value: '#1A237E', label: 'indigo darken-4' },
                    { value: '#0D47A1', label: 'blue darken-4' },
                    { value: '#01579B', label: 'light-blue darken-4' },
                    { value: '#006064', label: 'cyan darken-4' },
                    { value: '#004D40', label: 'teal darken-4' },
                    { value: '#1B5E20', label: 'green darken-4' },
                    { value: '#33691E', label: 'light-green darken-4' },
                    { value: '#827717', label: 'lime darken-4' },
                    { value: '#F57F17', label: 'yellow darken-4' },
                    { value: '#FF6F00', label: 'amber darken-4' },
                    { value: '#E65100', label: 'orange darken-4' },
                    { value: '#BF360C', label: 'deep-orange darken-4' },
                    { value: '#3E2723', label: 'brown darken-4' },
                    { value: '#263238', label: 'blue-grey darken-4' },
                    { value: '#000000', label: 'black' }
                ]
           }
       },
       computed: {},
       mounted: function() {},
       methods: {
           change_(){
            //    this.foreground = this.value_color;
            //    console.log( this.value_color );
           },
           colorFun(){
            //    this.foreground = this.color1;
            //    console.log( this.color1 );
           }
       },
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style lang="scss" scoped >
.QR{
    text-align: center;
    .QR_IMG{
        border: solid;
        border-width: 10px;
        padding: 10px 10px  7px 10px;
        display: inline-block;
        margin: 0px auto;
        margin-bottom: 0;
        border-radius: 5px;
    }
    >.QR_URL{
        font-size: 12px;
        transform:scale(0.5,0.5);
        margin: 0;
        padding: 0 75px;
        position: relative;
        top: -14px;
        color: #fff;
    }
    >.QR_TEXT{
        margin: 0;
        position: relative;
        top: -10px;
    }
}
</style>

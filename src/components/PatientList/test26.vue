<!--
 * @Description: 正则表达式
 * @Date: 2020-05-11 10:40:48
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-06-11 10:20:47
 -->


<template>
   <div class="RegExp">
    <p class="size12"> <b> 正则表达式： </b></p>
    <p class="size12" v-for="(item, index) in desc" :key="index+100"> {{ item }} </p>
    <br>
    <div v-for="(item, index) in list" :key="index">
        <el-input v-model="item.input" :placeholder="item.desc" style="width: 300px;" ></el-input>
        <span> &nbsp; {{ exp(item)===true?'😃':'👿' }} </span>
        <br>
        <br>
    </div>

    <p> * any-rule 【插件】 </p>
    <p style="height: 37px;margin:3px 0">
        <transition name="el-zoom-in-top">
            <el-alert v-show="!exp_(input_)" class="transition-box" title="请输入大于1且小于999999的正整数！" style="width: 300px;" type="error"> </el-alert>
        </transition>
    </p>
    <el-input :value="input_" @input="inputFun" placeholder="* any-rule 【插件】" style="width: 300px;"></el-input>
    <p> # {{ exp_(input_) }} - {{ text }} </p>

   </div>
</template>
   
<script>

   export default {
       name: "RegExp",
       components: {},
       data () {
           return {
               desc:[
                   '^ 匹配字符串的开始',
                   '$  匹配字符串的结束'
               ],
               list:[
                   {
                       input: '',
                       re: /^[0-9]{5,10}$/,
                       desc: '匹配5-10位数字'
                   },
                   {
                       input: '',
                       re: /\s$/,
                       desc: '请输入内容'
                   },
                   {
                       input: '',
                       re: /^\w{1,10}\.com$/,
                       desc: '/^\w{1,10}\.com$/'
                   },
                   {
                       input: '',
                       re: /^1(3|4|5|7|8)[0-9]{9}$/,
                       desc: '手机号码'
                   },
                   {
                       input: '',
                       re: /[^a-zA-Z]/,
                       desc: '非字母'
                   },
                   {
                       input: '',
                       re: /\w{8,10}@[a-z1-9]{2,7}(\.[a-z]{2,3}){1,2}/,
                       desc: '电子邮箱地址'
                   },
                   {
                       input: '',
                       re: /\w{8,10}@[a-z1-9]{2,7}(\.[a-z]{2,3}){1,2}/,
                       desc: '电子邮箱地址'
                   }
               ],
               input_: '',
               text: ''
           }
       },
       computed: {
           exp(){
               return ( item )=>{
                  return item.re.test(item.input);
               };
           },
           exp_(){
                // let reg = new RegExp(/^[1-9]{1,5}[.][0-9]{1,2}$/);
                // let reg = new RegExp(/^[a-zA-Z1-9_-]{5,20}$/);
                // /o{3}$/  匹配字符串结尾 "ooo" 的字符串 如：jiyinghaooo
                // /o{3}/   匹配字符串中任意位置有 "ooo" 的字符串 如：jiyoooinghao
                // /^o{3}/  匹配字符串开头 "ooo" 的字符串 如：ooojiyinghao
                // /^o{3,}/ 匹配字符串开头至少3个 "o" 的字符串 如：ooooooojiyinghao
                // /o{3,}/  匹配字符串中任意位置有至少3个 'o' 的字符串
                // /o{3,}$/ 匹配字符串结尾至少3个 'o' 的字符串 如：jiyinghaooo,jiyinghaoooooo,
                // /jia+o/  匹配 "jiaaaaaao"
                // /jia*o/  匹配 "jio","jiao","jiaaaaao"
                // /jia?o/  匹配 "jio","jiao"
                // /^[^0-9][0-9]$/  第一位不是0-9 第二位是0-9的两位字符串
                // let reg = new RegExp(/^[^0-9][0-9]$/);
                // /^.5$/ 第一位可以使任何字符 第二位是5
                /* 特殊字符 .(点，句号)在正则表达式中用来表示除了"新行"之外的所有字符 */
                // /a{4}/   匹配字符串中包含 "aaaa" 
                // /^a{4}$/   匹配字符串 "aaaa" 
                // /^\-?[0-9]{0,6}\.?[0-9]{1,2}$/  匹配正负数1-2位小数的浮点数，整数1-6位数，如：0.5，-0.5, 10.55，50.3
                /* 特殊字符 * 与 {0,} 是相等的 */ 
                // /7/ 字符串中包含 "7"
                /* 句点 (.)  匹配字符串中的各种打印或非打印字符，只有一个字符例外。这个例外就是换行符 (\n)。 */
                // /a.c/     匹配 a-c, asc, aoc
                // /[-a-z]/  匹配所有小写字母和 "-" (连接符)
                // /[!-~]/   匹配 "!", "-", "~" 字符
                // /jiyinghao [^12345]/ 匹配包含 "jiyinghao ?" ?不包含 "12345" (^：不包含)
                // /^(ji|ying|hao) [1-9][0-9]{0,1}$/  匹配 "ji " 或 "ying " 或 "hao " 加 两位数字（第一位1-9第二位0-9） 
                // ^(?:ji|ying|hao) [1-9][0-9]{0,1}$ 

                /**
                 *  >>>  前瞻： ji(?=ying)     "ji" 后面的字符是不是 "ying"？ 如果是则匹配 
                 *  >>>  后顾： (?<=ying)ji    "ji" 前面的字符是不是 "ying"？ 如果是则匹配
                 *  >>>  负前瞻： ji(?!ying)   "ji" 后面的字符是不是 "ying"？ 如果不是则匹配
                 *  >>>  负后顾： (?<!ying)ji  "ji" 前面的字符是不是 "ying"？ 如果不是则匹配
                 */
                
                // /Windows (?=95|98|NT)/ 匹配 "Windows 95", "Windows 98", "Windows NT"
                
                /**
                 * ^(?!_)  不能以 '_' 开头 (^[^_])
                 * (?!.*?_$) 不能以 '_' 结尾
                 */

                // 匹配1-20位所有汉字,大写字母,小写字母,数字,"_","-"且首位和尾位不能是"_"
                // /([0-9A-Za-z_-])\1{5}$/ 连续相同的6个数字,大小写字母,"_","-"字符
                // 244210065@qq.com
                
                // let reg = /^(?!_)(?!.*?_$)[\u4e00-\u9fa50-9a-zA-Z_-]{1,20}$/;
                // let reg = /^[A-Za-z0-9_-]{2,20}@[a-z]{2,7}\.(com|cn|cnn)$/;
                // let reg = /^[^0A-Za-z][0-9]{0,5}$/
                let reg = /(?<!ying)ji/
                
                return ( item )=>{
                    this.text = JSON.stringify( new RegExp(reg).exec(item) );
                    return new RegExp(reg).test(item);
                }
           },
       },
       mounted: function() {},
       methods: {
            inputFun(event){
                console.log( event );
                this.input_ = event;
            }
       },
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
 .RegExp{
     padding: 30px;
     .size12{
         font-size: 12px;
         margin: 3px;
     }
 }
</style>
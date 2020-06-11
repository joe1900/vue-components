<!--
 * @Description: 线条
 * @Date: 2020-04-24 14:08:59
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-24 17:36:07
 -->
 
<template>
   <div class="test23">
       <trend
            class="lin_"
            :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            width="200"
            height="25"
            auto-draw
            smooth>
        </trend>
        <trend
            class="lin_"
            :data="[5, 2, 5, 9, 5, 10, 3, 1, 0, 0, 1, 8, 2, 9, 10]"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            width="200"
            height="25"
            auto-draw
            smooth>
        </trend>
        <trend
            class="lin_"
            :data="[10, 2, 5, 9, 5, 1, 3, 5, 0, 0, 1, 8, 2, 1, 5]"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            width="200"
            height="25"
            auto-draw
            smooth>
        </trend>
        <trend
            class="lin_"
            :data="[7, 2, 5, 9, 5, 5, 3, 5, 0, 0, 1, 5, 2, 9, 6]"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            width="200"
            height="25"
            auto-draw
            smooth>
        </trend>
        <trend
            class="lin_"
            :data="[2, 2, 5, 0, 5, 1, 3, 5, 0, 10, 1, 8, 2, 9, 0]"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            width="200"
            height="25"
            auto-draw
            smooth>
        </trend>
        <trend
            class="lin_"
            :data="[7, 2, 5, 2, 5, 6, 3, 5, 0, 7, 1, 3, 2, 6, 10]"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            width="200"
            height="25"
            auto-draw
            smooth>
        </trend>
        
        <div v-if="data.sha256 != ''">
            <p>
                加密 crypto-js
            </p>
            <p>sha256: {{ data.sha256 }} </p>
            <p>Base64: {{ data.Base64 }} </p>
            <p>md5: {{ data.md5 }} </p>
            <p>sha1: {{ data.sha1 }} </p>
            <p>sha224: {{ data.sha224 }} </p>
            <p>sha512: {{ data.sha512 }} </p>
            <p>sha384: {{ data.sha384 }} </p>
            <p>sha3: {{ data.sha3 }} </p>
            <p>ripemd160: {{ data.ripemd160 }} </p>
        </div>
   </div>
</template>
   
<script>
import UAParser from 'ua-parser-js';

import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import md5 from 'crypto-js/md5';
import sha1 from 'crypto-js/sha1';
import sha224 from 'crypto-js/sha224';
import sha512 from 'crypto-js/sha512';
// import sha384 from 'crypto-js/sha384';
import sha3 from 'crypto-js/sha3';
import ripemd160 from 'crypto-js/ripemd160';
// import hmacSHA512 from 'crypto-js/hmac-sha512';







var parser = new UAParser();
   export default {
       name: "test23",
       components: {},
       data () {
           return {
               data:{
                   sha256: '',
                   Base64: '',
                   md5: '',
                   sha1: '',
                   sha224: '',
                   sha512: '',
                   sha384: '',
                   sha3: '',
                   ripemd160: ''
               }
           }
       },
       computed: {},
       mounted: function() {
           // ua-parser-js 客户端信息
           console.log('客户端信息：', parser.getResult() );
           console.log( Base64 )
           this.data.sha256 = sha256('jiyinghao');
           // this.data.Base64 = Base64.stringify('jiyinghao','key');
           this.data.md5 = md5('jiyinghao');
           this.data.sha1 = sha1('jiyinghao');
           this.data.sha224 = sha224('jiyinghao');
           this.data.sha512 = sha512('jiyinghao');
           // this.data.sha384 = sha384('jiyinghao');
           this.data.sha3 = sha3('jiyinghao');
           this.data.ripemd160 = ripemd160('jiyinghao');
       },
       methods: {},
       /* 离开当前组件时 */
       destroyed: function () {}
   }
</script>
 
<style scoped lang="scss">
 .test23{

     .lin_{
         border: solid 1px #d1d1d1;
         border-radius: 5px;
         margin: 50px 5px;
         background-color: #f1f1f1;
     }
 }
</style>
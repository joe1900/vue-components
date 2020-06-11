<!--
 * @Description: 患者列表页
 * @Date: 2019-12-05 15:04:14
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-03-09 11:47:16
 -->
<template>
    <div>
        患者列表页 - 懒加载测试
        <p>
             <el-button type="primary" @click="show('Text1')">Text1</el-button>
              <el-button type="primary" @click="show('Text2')">Text2</el-button>
               <el-button type="primary" @click="show('Text2')">Text3</el-button>
        </p>
        <Text1 v-if="Text1" />
        <Text2 v-if="Text2" />
        <Text3 v-if="Text3" />
    </div>
</template>

<script>
const Text1 = ()=>import("./test1.vue");
const Text2 = ()=>import("./test2.vue");
const Text3 = ()=>import("./test3.vue");
export default {
    components: {
        Text1,
        Text2,
        Text3
    },
    data() {
        return {
            Text1:false,
            Text2:false,
            Text3:false
        }
    },
    mounted() {
        console.log( this.$router );
        console.log( this.$router.currentRoute.meta );
        setTimeout(() => {
            this.show('Text1');
            console.log( this.$router );
        }, 3000);
        setTimeout(() => {
            this.show('Text2');
            console.log( this.$router );
        }, 6000);
        setTimeout(() => {
            this.show('Text3');
            console.log( this.$router );
        }, 9000);
    },
    methods: {
        show(test){
            this.Text1 = false;
            this.Text2 = false;
            this.Text3 = false; 
            this[test] = true;
        }
    },
}
</script>
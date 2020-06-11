<!--
 * @Description: WS连接
 * @Date: 2020-06-10 15:27:18
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-06-11 09:45:44
--> 

<template>
    <div class="WS">
        <p v-for="(item, index) in data" :key="index" v-html="item"></p>
        <br>
        <el-input v-model="value" placeholder="发送..." style="width: 600px;" @change="websocketsend(value)" ></el-input>
        <br>
        <br>
        <input type="text" class="input_" placeholder="loading...">
    </div>
</template>

<script>
export default {
  name: "WS",
  components: {},
  data() {
    return {
        websock: null,
        value: '',
        data: []
    };
  },
  mounted: function() {},
  created() {
        this.initWebSocket();
  },
  destroyed() {
        // 离开路由之后断开websocket连接
        this.websock.close();
  },
  methods: {
    initWebSocket() {
        // 初始化weosocket
        const wsuri = "ws://123.207.136.134:9010/ajaxchattest";
        this.websock = new WebSocket(wsuri);
        this.websock.onmessage = this.websocketonmessage;
        this.websock.onopen = this.websocketonopen;
        this.websock.onerror = this.websocketonerror;
        this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
        // 连接建立之后执行send方法发送数据
        let actions = { test: `websocket连接... <br /> <br /> <i>${new Date()}</i> <br />` };
        this.websocketsend(JSON.stringify(actions));
    },
    websocketonerror() {
        // 连接建立失败重连
        this.initWebSocket();
    },
    websocketonmessage(e) {
        // 数据接收
        const redata = e.data;
        this.data.push( redata );
        // console.log( this.data );
    },
    websocketsend(Data) {
        // 数据发送
        this.websock.send(Data);
        this.value = "";
    },
    websocketclose(e) {
        // 关闭
        console.log("断开连接", e);
    }
  },
  /* 离开当前组件时 */
  destroyed: function() {}
};
</script>
 
<style lang="scss" scoped >
.WS {
    .input_{
        width: 450px;
        height: 34px;
        border: solid 2px #111;
        border-radius: 4px;
        padding-left: 10px;
        font-size: 16px;
    }
}
</style>
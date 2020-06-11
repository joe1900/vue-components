<!--
 * @Description: h5 录音
 * @Date: 2020-04-23 18:07:54
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-24 10:42:14
 -->

<template>
  <div class="test22">
    <p></p>
    <p>时长: {{ rec.duration }}</p>
    <p>大小: {{ rec.fileSize }}</p>
    <el-button class="btn_" round @click="start">开始录音</el-button>
    <el-button class="btn_" round @click="rec.pause();">暂停录音</el-button>
    <el-button class="btn_" round @click="rec.resume()">继续录音</el-button>
    <el-button class="btn_" round @click="rec.stop();">结束录音</el-button>
    <el-button class="btn_" round @click="rec.play();">录音播放</el-button>
    <el-button class="btn_" round @click="boXing">录音波形</el-button>
    <el-button class="btn_" round @click="destroy">销毁录音实例</el-button>

    <el-alert :title="error" type="error" effect="dark"></el-alert>
  </div>
</template>
   
<script>
import Recorder from "js-audio-recorder";
export default {
  name: "test22",
  components: {},
  data() {
    return {
      rec: "",
      error: "！"
    };
  },
  computed: {},
  mounted: function() {
    this.rec = new Recorder({
      sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
      sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
      numChannels: 1 // 声道，支持 1 或 2， 默认是1
    }); 
  },
  methods: {
    boXing() {
      console.log(this.rec.getRecordAnalyseData());
    },
    start(){
      this.rec.start().then(() => {
          // 开始录音
          console.log(`开始录音`);
      }, (error) => {
          // 出错了
          console.log(`${error}`);
      });
    },
    destroy(){
          this.rec.destroy().then(() => {
            this.rec = null;
        });
    }

  },
  /* 离开当前组件时 */
  destroyed: function() {}
};
</script>
 
<style scoped lang="scss">
.test22 {
  width: 414px;
  height: 736px;
  border: solid 1px #d0d0d0;
  margin: 0 auto;
  padding: 10px 15px;
  box-sizing: border-box;
  .btn_ {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
  }
  > p {
    font-size: 14px;
    color: #555;
    margin: 5px;
  }
}
</style>
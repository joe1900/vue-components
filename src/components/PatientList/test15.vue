<!--
 * @Description: 声音波纹
 * @Date: 2020-04-17 15:40:06
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-20 19:09:25
 -->
<template>
  <div class="test15">
    <div id="waveform" ref="waveform"></div>
    <p></p>
    <p style="text-align: center;">
        <el-button round disabled="">状态：{{ status }}</el-button>
        <el-button round @click="wavesurfer.load(mp3)">加载音频（{{ jinDu }}%）</el-button>
        <el-button round @click="time = wavesurfer.getDuration()">获取时长 （{{ time }}s）</el-button>
        <el-button round @click="wavesurfer.playPause();status = wavesurfer.isPlaying();">播放/暂定</el-button>
        <el-button round @click="wavesurfer.skipForward(10);">快进10s</el-button>
        <el-button round @click="wavesurfer.skipBackward(10);">后退10s</el-button>
        <el-button round @click="wavesurfer.stop();status = wavesurfer.isPlaying();">停止</el-button>
    </p>
    <p>
      自定义全局组件：
      <Loading :test="`我是传值-`"></Loading>
    </p>
  </div>
</template>
   
<script>

import WaveSurfer from 'wavesurfer.js';
// import mp3 from '../../assets/M.mp3'
export default {
  name: "test15",
  components: {},
  data() {
    return {
      wavesurfer: "",
      time: 0,
      jinDu:0,
      status: false,
      mp3: require('../../assets/M.mp3')
    };
  },
  computed: {},
  mounted: function() {
      this.loadMusic();
  },
  methods: {
    loadMusic() {
      this.$nextTick(() => {
        console.log({ ...this.config, name: "jiyinghao", age: 19 });
        this.wavesurfer = WaveSurfer.create({
          container: this.$refs.waveform,
          waveColor: "#3F51B5",
          progressColor: "#f0f0f0",
          barWidth: 1,
          barHeight: 0.9,
          mediaControls: false,
          barGap: 0
        });
        
        this.wavesurfer.on("loading", percents => {
              // 当前加载的进度
              this.jinDu = percents;
              this.status = this.wavesurfer.isPlaying();
        });
        // this.time = this.wavesurfer.getDuration();
      });
    }
  },
  /* 离开当前组件时 */
  destroyed: function() {}
};
</script>
 
<style scoped lang="scss">
.test15 {
}
</style>
<!--
 * @Description: 屏幕截图
 * @Date: 2020-04-09 15:32:57
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-09 18:15:12
 -->
 <template>
    <div class="Screenshot">
        <div class="Screenshot-box">
            <br>
            <el-time-select
                placeholder="起始时间"
                v-model="startTime"
                :picker-options="{
                start: '09:30',
                step: '00:30',
                end: '19:00'
                }">
            </el-time-select>
            &nbsp;
            <el-time-select
                placeholder="结束时间"
                v-model="endTime"
                :picker-options="{
                start: '09:30',
                step: '00:30',
                end: '19:00',
                minTime: startTime
                }">
            </el-time-select> 
        </div>
        <el-row>
            <el-button @click="screenshotFun"> 发起截图 </el-button>
            <el-button type="primary" @click="clearFun"> 清除截图 </el-button>
            <el-button type="success" @click="fileFun"> 获取file对象 </el-button>
            <el-button type="info" @click="downloadFun"> 下载截图 </el-button>
        </el-row>
        <screen-capture ref="sc" :html="html"></screen-capture>
        <el-dialog
            :visible.sync="dialogVisible"
            height="90%"
        >
        <img :src="img" alt="" style="width:100%" srcset="">
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false;clearFun();"> 取消 </el-button>
            <el-button type="primary" @click="downloadFun"> 保存 </el-button>
        </span>
        </el-dialog>
        <!-- logo -->
        <img src="../../assets/QR.png" id="logo_" ref="logo" alt="" srcset="">
    </div>
 </template>

 <script>
    import ScreenCapture from '@notadd/vue-screen-capture';
    export default {
        name: "Screenshot",
        components: {ScreenCapture},
        data () {
            return {
                html: document.body,
                startTime: '',
                endTime: '',
                dialogVisible: false,
                img:''
            }
        },
        computed: {},
        mounted: function() {},
        methods: {
            screenshotFun(){
                this.$refs.logo.style.display = "inline-block";
                this.$refs.sc.capture();
                const loading = this.$loading({
                    lock: true,
                    text: '正在截图...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                
                setTimeout(()=>{ 
                    this.$refs.logo.style.display = "none";
                    this.fileFun();
                    this.dialogVisible = true;
                    loading.close();
                },1500)
            },
            clearFun(){
                this.$refs.sc.clear();
            },
            fileFun(){
                let reader = new FileReader();
                reader.readAsDataURL(this.$refs.sc.getCaptureImage());
                reader.onload = ()=>{
                    this.img = reader.result;
                    // console.log(reader.result); //获取到base64格式图片
                };
            },
            downloadFun(){
                this.downLoadImage( document.getElementById('capture-canvas'),`hisens-${(new Date()).valueOf()}` );
                this.dialogVisible = false;
                this.clearFun();
            },
            downLoadImage(canvas,name) {
                let a = document.createElement("a");
                a.href = canvas.toDataURL();
                a.download = name;
                a.click();
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
            }
        },
        /* 离开当前组件时 */
        destroyed: function () {}
    }
 </script>
  
 <style scoped lang="scss">
  .Screenshot{
      background-color: saddlebrown;
      height: 100%;
      text-align: center;
      .Screenshot-box{
          height: 500px;
      }
      .screen-capture{
          height: 0;
          overflow: hidden;
      }
      #logo_{
          width: 60px;
          height: 60px;
          position: absolute;
          left: 30px;
          top: 30px;
          display: none;
      }
  }
 </style>
<style lang="scss">
    .el-dialog__footer{
          margin-top: -25px;
    }
</style>
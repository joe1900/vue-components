<!--
 * @Description: 导出 excel 表格
 * @Date: 2020-04-08 15:06:56
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-05-23 11:24:46
 -->
<template>
  <div class="test7">
      <button @click="exportExcel"> exportExcel </button>

      <button @click="Download"> 自定义样式 - XLSX </button>

      
  </div>
</template>
   
<script>
import exportExcel from "rz-vue-excel";

const XLSX = window.XLSX;
export default {
  name: "test7",
  components: {},
  data() {
    return {
        // 导出表格名称
        fileName: "学生信息",
        header:{
            // 表格表头
            header: ["ID", "用户姓名", "用户年龄", "用户性别", "描述"],
            // 对应字段
            filterVal: ["id", "name", "age", "sex", "desc"]
        },
        list:[
          {
            id: 0,
            name: 'jiyinghao',
            age: 28,
            sex: '男',
            desc: "${index%2==0?'男':'女'}` } ); }"
          }
        ],
    };
  },
  computed: {},
  mounted: function() {
    console.log( XLSX )
  },
  methods: {

     // 将workbook装化成blob对象
     workbook2blob(workbook) {
          // 生成excel的配置项
          const wopts = {
            // 要生成的文件类型
            bookType: "xlsx",
            // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
            bookSST: false,
            type: "binary"
          };
          let wbout = XLSX.write(workbook, wopts);
          // 将字符串转ArrayBuffer
          function s2ab(s) {
            let buf = new ArrayBuffer(s.length);
            let view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
            return buf;
          }
          let blob = new Blob([s2ab(wbout)], {
            type: "application/octet-stream"
          });
          return blob;
        },
  
        // 将blob对象创建bloburl，然后用a标签实现弹出下载框
        openDownloadDialog(blob, fileName) {
          if (typeof blob == "object" && blob instanceof Blob) {
            blob = URL.createObjectURL(blob); // 创建blob地址
          }
          let aLink = document.createElement("a");
          aLink.href = blob;
          // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，有时候 file:///模式下不会生效
          aLink.download = fileName || "";
          let event;
          if (window.MouseEvent) event = new MouseEvent("click");
          //   移动端
          else {
            event = document.createEvent("MouseEvents");
            event.initMouseEvent( "click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null );
          }
          aLink.dispatchEvent(event);
        },

        // 整理数据点击下载操作
        Download(){
            let sheet1data = [ { department: "行政部", count: 2 }, { department: "前端部", count: 2 } ];
            let sheet2data = [ { name: "张三", do: "整理文件" }, { name: "李四", do: "打印" } ];
            let sheet3data = [ { name: "张大人", do: "vue" }, { name: "李大人", do: "react" } ];
            let sheet1 = XLSX.utils.json_to_sheet(sheet1data);
            // sheet1 = XLSX.utils.aoa_to_sheet(sheet1);
            sheet1['!merges'] = [
                {
                  e:{c:2,r:0},
                  s:{c:0,r:0}
                },
                {
                  e:{c:2,r:9},
                  s:{c:0,r:9}
                }
              ]
              sheet1['!cols'] = [
                    { wch: 10 }, // 第一列
                    { wch: 20 }, // 第二列
                    // { wch: 80 }  // 第三列
                ]
            let sheet2 = XLSX.utils.json_to_sheet(sheet2data);
            let sheet3 = XLSX.utils.json_to_sheet(sheet3data);
            console.log( XLSX );
            
            /* 创建一个新的空白工作簿 */
            let wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, sheet1, "部门统计");
            XLSX.utils.book_append_sheet(wb, sheet2, "行政部");
            XLSX.utils.book_append_sheet(wb, sheet3, "前端部");
            const workbookBlob = this.workbook2blob(wb);

            this.openDownloadDialog(workbookBlob, `部门统计.xlsx`)
        },


    // 导出方法
    exportExcel() {
        // for (let index = 0; index < 1000; index++) { this.list.push( { id: index, name: `userName-${index}`, age: 19, sex: `${index%2==0?'男':'女'}` } ); }
        new exportExcel({
            fileName: "xxx - ED记录",
            header: this.header.header,
            filterVal: this.header.filterVal,
            list: this.list
        }).export_excel();
        // new exportExcel({
        //     fileName: "xxx - 个人档案",
        //     header: this.header.header,
        //     filterVal: this.header.filterVal,
        //     list: this.list
        // }).export_excel();
        // new exportExcel({
        //     fileName: "xxx - iief5记录",
        //     header: this.header.header,
        //     filterVal: this.header.filterVal,
        //     list: this.list
        // }).export_excel();
        // new exportExcel({
        //     fileName: "xxx - EHS [ 2020-05-20 18:41:05	- 2020-05-20 18:41:10 ]",
        //     header: this.header.header,
        //     filterVal: this.header.filterVal,
        //     list: this.list
        // }).export_excel();
        // new exportExcel({
        //     fileName: "xxx - EHS [ 2020-05-21 18:41:05	- 2020-05-21 18:41:10 ]",
        //     header: this.header.header,
        //     filterVal: this.header.filterVal,
        //     list: this.list
        // }).export_excel();
    }
  },
  /* 离开当前组件时 */
  destroyed: function() {}
};
</script>
 
<style scoped lang="scss">
.test7 {
}
</style>
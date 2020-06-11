<!--
 * @Description: test2
 * @Date: 2020-03-09 10:23:46
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-03-27 16:38:28
 -->
<template>
  <div class="test2">
    <div xs12 md3 id="myChart__" :style="{width: '99.5%', height: '500vh'}"></div>
  </div>
</template>
   
<script>
import json from "../../views/look.json";
import $echarts from "echarts";
export default {
  name: "test2",
  components: {},
  data() {
    return {
      internalData: {
          "name": "全国",
          'value': '82098',
          "children": []
      },
      worldData: [] // json.country
    };
  },
  computed: {},
  mounted: function() {
    this.$message({
      message: "test2",
      type: "warning",
      duration: 1000
    });
    //    this.look();
    console.log(json);
    this.filterData();
    
  },
  methods: {
    filterData(){
        json.data.forEach(item => {
            let list = {
                    "name": item.city,
                    // 'value': `累计确诊:${item.diagnosed},新增:${item.suspected},现存确诊:${item.currentConfirmed},死亡:${item.died},治愈:${item.cured}`,
                    "value":'123',
                    "children": []
                }
               console.log( item ) 
            if( item['cities'] ){
                item['cities'].forEach(element => {
                    list.children.push(
                        {
                            "name": element.cityName,
                            'value': `累计确诊:${item.diagnosed},新增:${item.suspected},现存确诊:${item.currentConfirmed},死亡:${item.died},治愈:${item.cured}`,
                        }
                    )
                });
            }
             this.internalData.children.push( list );
        });
        // this.internalData.push( data );
        console.log( this.internalData );
        this.info();
    }, 
    look() {
      let look = "https://m.look.360.cn/events/feiyan?sv=&version=&market=&device=2&net=4&stype=&scene=&sub_scene=&refer_scene=&refer_subscene=&f=jsonp&location=true&_=1583145636129&callback=jsonp2";
      this.$jsonp(look, (err, data) => {
        if (data.errno !== 0) {
          this.$message({
            message: `接口报错-${errno.errmsg}`,
            type: "warning",
            duration: 10000
          });
          return;
        }
        this.internalData = data.data;
        this.worldData = data.country;
      });
    },
    info() {
        // console.log( this.internalData )
        // this.filterData();
      let myChart = $echarts.init(document.getElementById("myChart__"));
      myChart.setOption({
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove"
        },
        series: [
          {
            type: "tree",
            data: [this.internalData],
            top: "1%",
            left: "7%",
            bottom: "1%",
            right: "20%",

            symbolSize: 7,

            label: {
              position: "left",
              verticalAlign: "middle",
              align: "right",
              fontSize: 9
            },

            leaves: {
              label: {
                position: "right",
                verticalAlign: "middle",
                align: "left"
              }
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      });
    }
  },
  /* 离开当前组件时 */
  destroyed: function() {}
};

/*
    var data2 = {
    "name": "flare",
    "children": [
        {
            "name": "flex",
            "children": [
                {"name": "FlareVis", "value": 4116}
            ]
        },
        {
            "name": "scale",
            "children": [
                {"name": "IScaleMap", "value": 2105},
                {"name": "LinearScale", "value": 1316},
                {"name": "LogScale", "value": 3151},
                {"name": "OrdinalScale", "value": 3770},
                {"name": "QuantileScale", "value": 2435},
                {"name": "QuantitativeScale", "value": 4839},
                {"name": "RootScale", "value": 1756},
                {"name": "Scale", "value": 4268},
                {"name": "ScaleType", "value": 1821},
                {"name": "TimeScale", "value": 5833}
           ]
        },
        {
            "name": "display",
            "children": [
                {"name": "DirtySprite", "value": 8833}
           ]
        }
    ]
};
*/ 
</script>
 
<style scoped lang="scss">
.test2 {
}
</style>


 
<!--
 * @Description: 图片瀑布流
 * @Date: 2020-04-20 15:05:03
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-20 15:22:54
 -->

 <template>
    <div class="test16">
        <Stick
            :list="list"
            @onScrollEnd="loadMore"
            >
        <template slot-scope="scope" :loadTriggerDistance="0" :columnSpacing="20">
            <div class="card">
                <img v-if="scope.data.cover" :src="scope.data.cover"/>
                <h2>{{scope.data.title}}</h2>
                <p>{{scope.data.intro}}</p>
            </div>
        </template>
        </Stick>
    </div>
 </template>
    
 <script>
    export default {
        name: "test16",
        components: {},
        data () {
            return {
                list: [
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "再次见到合肥，在历经五年的沪漂之后...",
                            "title": "再见 · 合肥"
                        }
                    ]
            }
        },
        computed: {},
        mounted: function() {},
        methods: {
            loadMore: function () {
                this.list.push({
                    "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                    "intro": "今天的分享主要围绕 可视化布局模块的一些...",
                    "title": "added by scroll 可视化布局模块开发分享"
                },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "2018 年对于我来说是非...",
                            "title": "剧中人的2018年终总结"
                        },
                        {
                            "cover": "https://pic1.zhimg.com/v2-dd0c86722ec7034fdec0a2a489ae0878_400x224.jpeg",
                            "intro": "再次见到合肥，在历经五年的沪漂之后...",
                            "title": "再见 · 合肥"
                        })
            }
        },
        /* 离开当前组件时 */
        destroyed: function () {}
    }
 </script>
  
 <style scoped lang="scss">
  .test16{
      width: 100%;
      box-sizing: border-box;
      background-color: royalblue;
      padding: 8px;
      img{
          width: 100%;
      }
      .card{
          background-color: seashell;
      }
  }
 </style>

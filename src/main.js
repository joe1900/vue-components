/*
 * @Description: main.js
 * @Date: 2019-12-04 11:38:58
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-05-22 19:19:13
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';
import '../theme/index.css';
import './style.css';
import 'vue-material-design-icons/styles.css';
import Jsonp from 'jsonp';

// xlsx [多sheet页]
// import './plugins/xlsx.min.js';

// true 取消vue所有的日志和警告
Vue.config.silent = false;

Vue.config.errorHandler = function (err, vm, info) {
  console.log( err )
  console.log( vm )
  console.log( info )
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
}

// 给 v-on 自定义键位别名
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  "media-play-pause": 9,
  up: [38, 87],
  enter123: 13
}

// 自定义全局指令
import Directive from './directive/directive.js';
Vue.use( Directive );

console.log( 'Directive', Directive );

// Object.keys(Directive).forEach(key => {
//   Vue.use(key, Directive[key]);
// });

// Vue.directive('focus', {
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// })



// JSONP 请求
Vue.prototype.$jsonp = Jsonp;
Vue.config.productionTip = false;

/* 全局路由守卫 */
router.beforeEach((to, from, next) => {
    next();
    // let userId = store.state.loginInfo.id;
    //这里是对登录后的值进行判断，也可对token的值进行判断
    //   if (userId === '') {
    //     if (to.meta.requireAuth || to.name == null) {
    //       next({path: '/'})
    //     } else {
    //       next();
    //     }
    //   } else {
    //     //初始化动态路由方法
    //     initRouter(router, store); 
    //     next();
    //   }
});
// 刮刮卡
import ScratchCard from 'vue-scratch-card0';
Vue.use(ScratchCard);

// 复杂的日期过滤器
Vue.use(require('vue-moment'));

// 相对时间插件
import MomentAgo from 'moment-ago';
Vue.prototype.$momentAgo = MomentAgo;

// 复制功能组件
import Copy from 'vue-to-copy'
// 注册组件库
Vue.use(Copy);

// 图片加载占位,失败状态,懒加载
// https://www.npmjs.com/package/vue-lazyload#demo
import VueLazyload from 'vue-lazyload'
import ErrorImg from './assets/null.jpg';
import LoadingImg from './assets/5-160914192R4-51.gif'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: ErrorImg,  
  loading: LoadingImg,
  attempt: 1,
  lazyComponent: true,
  throttleWait: 2000,
  listenEvents: [ 'scroll' ]
})

// 简单的时间过滤器
import Vue2Filters from 'vue2-filters' 
Vue.use(Vue2Filters)

// 3d 按钮
import ButtonThree from 'vue-3d-button'
Vue.use(ButtonThree)

// 图片瀑布流
var Stick = require('vue-stick');
Vue.use(Stick)

// 放大、缩放
// import ResizeBox from 'vue-resize-box'
// Vue.use(ResizeBox)

// 自定义全局组件
// 其中'./components/loading/index' 的 /index 可以不写，webpack会自动找到并加载 index 。如果是其他的名字就需要写上。
import Loading from './components/Loding/index.js'
// 这时需要 use(Loading)，如果不写 Vue.use()的话，浏览器会报错，大家可以试一下
Vue.use(Loading)

// 自定义包
// import ParallaxImage from 'vue-parallax-image'
// Vue.prototype.$parallaxImage = ParallaxImage;


// 图标库
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret) 
library.add(faAddressCard)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// 点赞
import VueStarPlus from 'vue-star-plus'
import 'vue-star-plus/lib/vue-star-plus.css'
Vue.component('vue-star-plus', VueStarPlus)

// 线条
import Trend from "vuetrend";
Vue.use(Trend);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf45b956987a7a183&redirect_uri=http://www.hiensor.com&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
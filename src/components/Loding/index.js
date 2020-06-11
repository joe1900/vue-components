/*
 * @Description: 引入组件并导出对象
 * @Date: 2020-04-20 15:32:49
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-20 16:01:28
 */

 // 引入 Loading 组件
import LoadingComponent from './loding.vue';
// 定义 Loading 对象
const Loading={
    // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
    install:function(Vue){
        Vue.component('Loading',LoadingComponent);
    }
}
// 导出
export default Loading;
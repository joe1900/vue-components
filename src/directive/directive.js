/*
 * @Description: 自定义指令 - input自动获取焦点
 * @Date: 2020-04-30 18:57:03
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-05-11 17:28:38
 */

import Vue from 'vue';
 // 自定义全局指令
// export default Vue.directive('focus', {
//     // 当被绑定的元素插入到 DOM 中时……
//     inserted: function (el) {
//       // 聚焦元素
//       el.focus();
//     }
//   })

export default Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……聚焦元素
  inserted: function (el) {
    el.focus();
  }
})
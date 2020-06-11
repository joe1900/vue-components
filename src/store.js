/*
 * @Description: 
 * @Date: 2019-12-04 11:38:58
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-22 14:10:28
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      //存放的键值对就是所要管理的状态
      name:'helloVueX'
  },
  mutations: {
    //es6语法，等同edit:funcion(){...}
    modifyName(state,text){
      state.name = text
    }
  },
  actions: {

  }
})

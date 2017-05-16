/**
 * Created by jerry on 2017/5/15.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import event from './event'   // 加载store的模块组件
// import theme from './theme'

export default new Vuex.Store({
  modules: {
    event    // 注册模块
  }
})

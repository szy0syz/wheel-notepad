/**
 * Created by jerry on 2017/5/15.
 */
import * as func from '../function'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = func.local.get() | {
  event: [],  // app数据对象为空
  count: 0}   // 计数器为空

export default {
  state,
  getters,
  actions,
  mutations
}

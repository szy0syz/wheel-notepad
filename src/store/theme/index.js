/**
 * Created by jerry on 2017/5/17.
 */
import * as func from '../function'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = func.themeLocal.get() || {theme: 'blue'}

export default {
  state,
  actions,
  mutations,
  getters
}

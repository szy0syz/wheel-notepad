/**
 * Created by jerry on 2017/5/17.
 */
import * as func from '../function'

export default {
  SWITCHTHEME (state, obj) {
    state.theme = obj.theme
    func.themeLocal.set(state)
  }
}

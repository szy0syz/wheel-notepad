/**
 * Created by jerry on 2017/5/15.
 */
// 这里应该用mutations_type啊！！！以后改！！！
export default {
  addevent: ({ commit }, payload) => commit('ADDEVENT', {items: payload}),
  eventdone: ({ commit }, payload) => commit('EVENTDONE', {id: payload}),
  eventtodo: ({ commit }, payload) => commit('EVENTTODO', {id: payload}),
  eventcancel: ({ commit }, payload) => commit('EVENTCANCEL', {id: payload}),
  clearevent: ({ commit }, payload) => commit('CLEAREVENT', {id: payload}),
  delevent: ({ commit }, payload) => commit('DELEVENT', {id: payload}),
  editevent: ({ commit }, payload) => commit('EDITEVENT', {id: payload}),
}

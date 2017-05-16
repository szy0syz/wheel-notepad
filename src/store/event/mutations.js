/**
 * Created by jerry on 2017/5/15.
 */
import * as type from './mutations_types'
import * as func from '../function'

// states这个对象里包含两个属性：event 和 count

export default {
  [type.ADDEVENT] (states, payload) {
    states.count++ // 取数据库中count计数器+1
    payload.items.id = states.count // 新增事件的id号为流水号
    states.event.unshift(payload.items) // 将新增事件放在数据的第一个元素
    func.local.set(states)
  },
  [type.EVENTTODO] (states, payload) {
    for (let i = 0; i < states.event.length; i++) {
      if (states.event[i].id === payload.id) {
        states.event[i].type = 1  // todo的状态为1
        states.event[i].time = func.getDate()
        var item = states.event[i]
        states.event.splice(i, 1)
        break
      }
    }
    states.event.unshift(item)
    func.local.set(states)
  },
  [type.EVENTDONE] (states, payload) {
    for (let i = 0; i < states.event.length; i++) {
      if (states.event[i].id === payload.id) {
        states.event[i].type = 2  // done的状态为2
        states.event[i].time = func.getDate()
        var item = states.event[i] // 这里我想用let，但发现需要用var提升变量在循环外层使用，后期再看。
        states.event.splice(i, 1)
        break
      }
    }
    states.event.unshift(item)
    func.local.set(states)
  },
  [type.EVENTCANCEL] (states, payload) {
    for (let i = 0; i < states.event.length; i++) {
      if (states.event[i].id === payload.id) {
        states.event[i].type = 3  // cancel的状态为3
        states.event[i].time = func.getDate()
        var item = states.event[i]
        states.event.splice(i, 1)
        break
      }
    }
    states.event.unshift(item)
    func.local.set(states)
  },
  [type.CLEAREVENT] (states) {
    states.event = []
    func.local.clear()
  },
  [type.DELEVENT] (states, payload) {
    if (states.event[payload.index].id === payload.id) {
      states.event.splice(payload.index, 1)
    } else {
      states.event.filter((d, i) => {
        if (d.id === payload.id) {
          states.event.splice(i, 1)
        }
      })
    }
    func.local.set(states)
  },
  [type.EDITEVENT] (states, payload) {
    if (states.event[payload.index].id === payload.id) {
      states.event[payload.index].content = payload.content
    } else {
      states.evnet.filter((d) => {
        if (d.id) {
          d.content = payload.content
        }
      })
    }
    func.local.set(states)
  }
}

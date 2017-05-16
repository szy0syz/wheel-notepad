/**
 * Created by jerry on 2017/5/15.
 */
export default {
  getEventList (states) {
    return states.event
  },
  getToDo (states) {
    return states.event.filter((d) => d.type === 1)
  },
  getDone (states) {
    return states.event.filter((d) => d.type === 2)
  },
  getCancel (states) {
    return states.event.filter((d) => d.type === 3)
  }
}

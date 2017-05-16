/**
 * Created by jerry on 2017/5/15.
 * 相当于一个DAL，数据访问层。
 */
const LocalEvent = function (item) {    // 构造函数不应该以小写开头，故修改成大写。
  this.get = function () {
    return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : ''
  }
  this.set = function (obj) {
    localStorage.setItem(item, JSON.stringify(obj))
  }
  this.clear = function () {
    localStorage.removeItem(item)
  }
}

export const local = new LocalEvent('szy_notepad')
// export const themelocal = new LocalEvent('szy_notepad_theme')
export const getDate = () => {    // 获取当天日期：xxxx-xx-xx
  const date = new Date()
  const month = parseInt(date.getMonth()) + 1
  return date.getFullYear() + '-' + month + '-' + date.getDate()
}

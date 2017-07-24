export default (datetime) => {
  let datetimeStr = datetime.toString()
  // 去掉 T
  datetimeStr = datetimeStr.replace(/T/, ' ')
  // 去掉毫秒，兼容IE浏览器
  if (datetimeStr.indexOf('.') > 0) {
    datetimeStr = datetimeStr.substring(0, datetimeStr.indexOf('.'))
  }
  // 注意：firefox浏览器必须为短横线
  datetime = new Date(datetimeStr)
  if (datetime === 'Invalid Date') {
    // 短横线 改为 右斜线 兼容IE浏览器
    datetimeStr = datetimeStr.replace(/-/, '/')
    datetime = new Date(datetimeStr)
  }

  let time = (datetime.getHours() > 9 ? datetime.getHours() : '0' + datetime.getHours()) + ':' + (datetime.getMinutes() > 9 ? datetime.getMinutes() : '0' + datetime.getMinutes()) + ':' + (datetime.getSeconds() > 9 ? datetime.getSeconds() : '0' + datetime.getSeconds())
  // 如果最终还是不正确时间，则显示为空
  if (time === 'Invalid date') {
    time = ''
  }
  return time
}

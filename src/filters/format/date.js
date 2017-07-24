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

  let date = datetime.getFullYear() + '-' + (datetime.getMonth() + 1 > 9 ? datetime.getMonth() + 1 : '0' + (datetime.getMonth() + 1)) + '-' + (datetime.getDate() > 9 ? datetime.getDate() : '0' + datetime.getDate())
  // 如果最终还是不正确时间，则显示为空
  if (date === 'Invalid date') {
    date = ''
  }
  return date
}

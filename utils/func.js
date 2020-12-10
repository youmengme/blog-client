export const formatDateToRelativeDateString = date => {
  let time = new Date(date).getTime()
  if (time > 0) {
    let result
    time = parseInt(time)
    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24
    const month = day * 30
    const now = new Date().getTime()
    const diffValue = now - time
    if (diffValue < 0) return

    const monthC = diffValue / month
    const weekC = diffValue / (7 * day)
    const dayC = diffValue / day
    const hourC = diffValue / hour
    const minC = diffValue / minute
    if (monthC >= 1) {
      if (monthC <= 12) {
        result = '' + parseInt(monthC) + '月前'
      } else {
        result = '' + parseInt(monthC / 12) + '年前'
      }
    } else if (weekC >= 1) {
      result = '' + parseInt(weekC) + '周前'
    } else if (dayC >= 1) {
      result = '' + parseInt(dayC) + '天前'
    } else if (hourC >= 1) {
      result = '' + parseInt(hourC) + '小时前'
    } else if (minC >= 1) {
      result = '' + parseInt(minC) + '分钟前'
    } else {
      result = '刚刚'
    }
    return result
  } else {
    return ''
  }
}

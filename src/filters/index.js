import date from './format/date'
import time from './format/time'
import No from './computed/No'
import float from './computed/float'

export default{
  /**
   * 格式化为日期
   * 参数: new Date()
   */
  date,
  /**
   * 格式化为时间
   * 参数: new Date()
   */
  time,
  /**
   * 计算分页序号
   * 参数: pagesize, currentpage, index
   */
  No,
  /**
   * 保留n位小数
   * 参数: string, float(default: 2)
   */
  float
}

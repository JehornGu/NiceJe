// 保留n位小数
export default (str, float = 2) => {
  let num = parseFloat(str).toFixed(float)
  return num
}

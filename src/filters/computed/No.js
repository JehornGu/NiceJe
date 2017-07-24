export default (size, page, index) => {
  let num = size * (page - 1) + index + 1
  return num
}

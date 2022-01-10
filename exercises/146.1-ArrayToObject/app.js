function transformFirstAndLast(array) {
  // your code here
  let obj = new Object()

  obj[array[0]] = array[array.length-1]

  return obj
}
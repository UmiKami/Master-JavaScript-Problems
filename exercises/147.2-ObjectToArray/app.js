function listAllValues(obj) {
  // your code here
  let arr = []
  for(let property in obj){
    arr.push(obj[property])
  }

  return arr
}
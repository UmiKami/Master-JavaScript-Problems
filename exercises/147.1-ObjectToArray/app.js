function getAllKeys(obj) {
  // your code here
  let arr = []
  for(let property in obj){
    arr.push(property)
  }

  return arr
}
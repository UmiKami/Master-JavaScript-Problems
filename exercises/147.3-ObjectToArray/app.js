function convertObjectToList(obj) {
  // your code here
  let arr = []
  for(let property in obj){
    arr.push([property, obj[property]])
  }

  return arr
}
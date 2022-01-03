function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let holder = 0
  let newArr = obj[key]

  if(!obj[key] || obj[key].length == 0){
    return 0
  }

  obj[key].forEach(e=>{
    holder += e
  })

  
  return holder / obj[key].length
}

var obj = {
  key: []
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  

function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let holder = 0

  if(obj[key].length == 0){
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

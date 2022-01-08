var obj = {
  keys: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let arr = obj[key]
    let holder = 1

    if(!obj[key] || obj[key].length == 0 || !Array.isArray(arr)){
      return 0
    }
    
    arr.forEach(e=>{
      holder *= e
    })
    
    return holder
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
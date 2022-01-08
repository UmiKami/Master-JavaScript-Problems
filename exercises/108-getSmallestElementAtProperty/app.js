var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here 
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
      return []
    }

    let newArr = obj[key].sort((a,b) =>{
      return a - b
    })

    return newArr[0]
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
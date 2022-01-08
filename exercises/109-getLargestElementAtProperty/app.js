var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
      return []
    }

    let newArr = obj[key].sort((a,b) =>{
      return a - b
    })

    return newArr[newArr.length-1]
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
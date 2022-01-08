
var obj = {
  key: [11, 13]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    let finalArr = []
    let counter = 0

    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
      return []
    }

    obj[key].forEach(e=>{
      if(e % 2 == 0){
        counter++
        finalArr.push(e)
      }else if(counter < 1 && obj[key].indexOf(e) == obj[key].length - 1){
        return []
      }
    })

    return finalArr
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    let counter = 0 // Evaluates if an odd number has been detected in the array
    let finalArr = []

    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
      return new Array()
    }

    obj[key].forEach(e=>{
      if(e % 2 != 0){
        counter++ // Add 1 if odd number is found
        finalArr.push(e)
      }
      
      // if no odd number is found (counter < 1) and we are at the last index of the array --> return empty[]
      else if(counter < 1 && obj[key].indexof(e) == obj[key].length - 1){
        // console.log(`Counter: ${counter}`);
        return new Array()
      } 
    })

    return finalArr
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
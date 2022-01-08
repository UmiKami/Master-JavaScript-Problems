var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let finalArr = []

    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
      // console.log(`One of the following is met:\nEmpty Array: ${obj[key].length == 0}\nNot an array: ${obj[key] !== Array}\nNo property: ${!obj[key]}`);
      return new Array()
    }

    obj[key].forEach(e=>{
       e *= e
       finalArr.push(e)
    })

    return finalArr
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
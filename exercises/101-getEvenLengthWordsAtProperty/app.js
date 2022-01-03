var obj = {
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    let newArr = []

    if(obj[key] !== Array || !obj[key]){
      return new Array()
    }

    obj[key].forEach(e=>{
      console.log(e);
      e.length % 2 == 0 ? newArr.push(e) : null
    })

    return newArr
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
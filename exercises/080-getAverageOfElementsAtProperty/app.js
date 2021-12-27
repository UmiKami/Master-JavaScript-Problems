// Write your function here

function getAverageOfElementsAtProperty(obj, key){
    objArr = obj[key]
    let sum = 0

    for(let i = 0; i < objArr.length; i++){
        sum += objArr[i]
    }

    let average = sum / objArr.length

    if(objArr.length == 0){
        return 0
    }else{ 
        return average
    }
}
var obj = {
    key: [1, 2, 3]
  };
  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2
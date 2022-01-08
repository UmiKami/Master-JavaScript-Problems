// Write your function here

function select(array, obj){
    var newArray = Object.entries(obj)
    var newObject = new Object
    
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < newArray.length; j++){
            if(array[i] == newArray[j][0]){
                newObject[array[i]] =  newArray[j][1]
            }
        }
    }

    return newObject
}


var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
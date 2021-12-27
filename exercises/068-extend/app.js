var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    obj1Arr = Object.entries(obj1)
    obj2Arr = Object.entries(obj2)

    
    if(obj1Arr[0][0] !== obj2Arr[0][0] && obj1Arr[1][0] == obj2Arr[0][0] && obj1Arr[0][0] !== obj2Arr[1][0] && obj1Arr[1][0] !== obj2Arr[1][0]){
        obj1[obj2Arr[1][0]] = obj2[obj2Arr[1][0]]
    }


  return obj1
}

var obj1 = {
    a: 1,
    b: 2
  };
  var obj2 = {
    b: 4,
    c: 3
  };
  
  
  extend(obj1, obj2);
  
  
  console.log(obj1); // --> {a: 1, b: 2, c: 3}
  console.log(obj2); // --> {b: 4, c: 3}
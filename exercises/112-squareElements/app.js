function squareElements(arr) {
  // your code here
  let newArr = []

  arr.forEach(e=>{
    newArr.push(e*e)
  })

  return newArr
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
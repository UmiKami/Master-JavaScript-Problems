function computeSumOfAllElements(arr) {
  // your code here
  let sum = 0

  arr.forEach(e=>{
    sum += e
  })

  return sum
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
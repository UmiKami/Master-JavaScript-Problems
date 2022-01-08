function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  finalArr = arr1.concat(arr2, arr3)
  return finalArr
}

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]
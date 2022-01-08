function joinArrayOfArrays(arr) {
  // your code here
  return arr[0].concat(arr[1],arr[2])
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
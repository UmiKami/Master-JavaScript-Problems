function getElementsAfter(array, n) {
  // your code here
  array.splice(0,n+1)
  return array
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
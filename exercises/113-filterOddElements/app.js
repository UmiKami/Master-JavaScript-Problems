function filterOddElements(arr) {
  // your code here
  let newArr = []

  arr.forEach(e=>{
    e % 2 != 0 ? newArr.push(e) : null
  })

  return newArr
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
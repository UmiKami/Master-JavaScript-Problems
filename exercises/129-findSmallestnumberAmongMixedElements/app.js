function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if(arr.length == 0){
    return 0
  }

  let numArr = []

  arr.forEach(e=>{
    typeof e == "number" ? numArr.push(e) : null
  })

  numArr.sort((a,b) =>{
    return a - b
  })

  if(numArr[0] === undefined)
    return 0

  return numArr[0]
}

var output = findSmallestNumberAmongMixedElements([ 'lincoln', 'octopus']);
console.log(output); // --> 4
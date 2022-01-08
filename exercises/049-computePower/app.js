function computePower(num, exponent) {
  // your code here
  let holder = num

  for(let i = 1; i < exponent; i++){
    num *= holder
  }

  return num
}

var output = computePower(3, 4);
console.log(output); // --> 8
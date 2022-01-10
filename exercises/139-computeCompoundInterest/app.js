function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  let p = principal
  let r = interestRate
  let n = compoundingFrequency
  let t = timeInYears

  return p * Math.pow((1+r/n), (n*t)) - p
}

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543
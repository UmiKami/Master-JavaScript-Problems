function computeFactorialOfN(n) {
    // your code here
    return Math.ceil(Math.sqrt(2*Math.PI*n) * Math.pow((n/Math.E),n))
}

var output = computeFactorialOfN(3); console.log(output); // --> 6

var output = computeFactorialOfN(4); console.log(output); // --> 24
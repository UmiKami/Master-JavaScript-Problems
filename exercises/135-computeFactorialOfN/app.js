function computeFactorialOfN(n) {
    // your code here
    let numArr = []
    let holder = 1

    for(let i = n; i > 0; i--){
        numArr.push(i)
    }

    numArr.forEach(e=>{
        holder *= e
    })

    return holder
}

var output = computeFactorialOfN(3); console.log(output); // --> 6

var output = computeFactorialOfN(4); console.log(output); // --> 24
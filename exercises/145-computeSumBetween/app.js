function computeSumBetween(num1, num2) {
    // your code here
    if(num1 > num2){
        return 0
    }

    let sum = num1

    for(let i = num1+1; i < num2; i++){
        if(i==num2){
            break
        }
        
        sum+=i
    }

    return sum
}

var output = computeSumBetween(2, 5);
console.log(output); // --> 9
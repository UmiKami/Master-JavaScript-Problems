function multiplyBetween(num1, num2) {
    // your code here
    if(num2 < num1){
        return 0
    }

    let ans = num1

    for(let i = num1+1; i < num2; i++){
        
        if(i==num2){
            break;
        }

        ans*=i
    }

    return ans
}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24
function isOddWithoutModulo(num) {
    // your code here
    if(num < 0){
        num *= -1
    }

    if(num == 0){
        return false
    }

    let isEven = true

    for(let i = 1; i < num; i++){
        isEven = !isEven
    }


    return isEven	
}
var output = isOddWithoutModulo(7);
console.log(output); // --> true
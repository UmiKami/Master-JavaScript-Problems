function isEvenWithoutModulo(num) {
    // your code here
    if(num == 0){
        return true
    }

    if(num < 0){
        num*=-1
    }

    let isEven = false

    for(let i = 1; i < num; i++){
        isEven = !isEven
    }

    return isEven
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true
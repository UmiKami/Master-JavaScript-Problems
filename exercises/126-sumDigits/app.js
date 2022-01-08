function sumDigits(num) {
    // your code here
    let numStr = String(num)
    let numArr = numStr.split("")

    let sum = 0

    numArr.forEach(e=>{
        if(numArr.includes("-")){
            numArr.indexOf(e) == 0 || numArr.indexOf(e) == 1 ? sum += 0 : sum += parseInt(e)
            numArr.indexOf(e) == numArr.length - 1 ? sum -= parseInt(numArr[1]) : null
        }else{
            sum += parseInt(e)
        }
    })

    // If there is a negative, the first digit is always going to to be subtracted from the sum of the other digits
    return sum
}
var output = sumDigits(316);
console.log(output); // --> 4
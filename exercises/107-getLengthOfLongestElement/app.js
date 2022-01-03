function getLengthOfLongestElement(arr) {
    // your code here
    let finalArr = []

    if(arr.length == 0){
        return 0
    }

    arr.forEach(e=>{
        finalArr.push(e.length)
    })

    finalArr.sort(function(a, b) {
        return a - b;
    })
    
    return finalArr[finalArr.length - 1]
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
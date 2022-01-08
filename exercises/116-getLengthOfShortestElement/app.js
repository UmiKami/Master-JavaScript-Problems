function getLengthOfShortestElement(arr) {
    // your code here

    if(arr.length == 0){
        return 0
    }

    let newArr = arr.sort(function(a,b){
        return a - b
    })

    return newArr[0].length
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
function findSmallestElement(arr) {
    // your code here
    if(arr.length == 0){
        return 0
    }

    return arr.sort(function(a,b){
        return a-b
    })[0]
}
var output = findSmallestElement([4, 2, 9, 10]);
console.log(output); // --> 1
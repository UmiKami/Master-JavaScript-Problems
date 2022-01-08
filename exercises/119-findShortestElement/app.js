function findShortestElement(arr) {
    // your code here
    if(arr.length==0){
        return ""
    }

    return arr.sort((a,b) =>{
        return a - b
    })[0]
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
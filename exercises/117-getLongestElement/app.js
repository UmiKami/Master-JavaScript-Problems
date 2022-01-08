function getLongestElement(arr) {
    // your code here
    if(arr.length == 0){
        return ""
    }

    let holder = arr[0].length

    arr.forEach(e=>{
        if(holder < e.length){
            holder = e
        }
    })

    return holder
}
var output = getLongestElement(['one', 'two', 'eight','three']);
console.log(output); // --> 'three'
function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let numArr = []

    if(arr.length == 0){
        return 0
    }

    arr.forEach(e=>{
        typeof e == "number" ? numArr.push(e) : null
    })

    if( numArr[0] === undefined){return 0}


    return numArr.sort((a,b) =>{return a-b})[numArr.length-1]
}

var output = getLargestNumberAmongMixedElements([ 'word', 'up']);
console.log(output); // --> 5
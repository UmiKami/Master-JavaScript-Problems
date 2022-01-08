function findShortestWordAmongMixedElements(arr) {
    // your code here
    if(arr.length == 0){
        return ""
    }

    let holderArr = []
    let holderInt = ""

    arr.forEach(e=>{
        if(typeof e == "string"){
            holderArr.push([e, e.length])
        }
    })
    
    for(let i = 0; i < holderArr.length; i++){
        if(i == holderArr.length-1){
            break
        }
        
        holderArr[i][1] <= holderArr[i+1][1] ? holderInt += holderArr[i][0] : null
    }

    return holderInt
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'thr', 'on']);
console.log(output); // --> 'two'
function getLongestWordOfMixedElements(arr) {
    // your code here
    if(arr.length == 0){
        return ""
    }
    
    let strArr = []

    arr.forEach(e=>{
        if(typeof e === "string"){
            strArr.push(e)
        }
    })

    strArr.sort((a,b) =>{
        return a-b
    })

    if(strArr[0] === undefined){
        return ""
    }else{
        return strArr[0]
    }
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
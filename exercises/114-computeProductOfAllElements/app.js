function computeProductOfAllElements(arr) {
    // your code here
    let holder = 1

    if(arr.length == 0){
        return 0
    }

    arr.forEach(e=>{
        holder *= e
    })

    return holder
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60
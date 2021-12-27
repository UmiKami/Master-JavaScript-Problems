
function addToFrontOfNew(arr, element) {
    // Write your function here
    let output = []

    arr.forEach(e =>{
        output.push(e)
    })

    output.unshift(element)

    return output
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
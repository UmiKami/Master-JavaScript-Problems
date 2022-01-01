// Write your function here
function removeElement(arr, discarder){
    let finalArr = []
    
    arr.forEach(e=>{
        e != discarder ? finalArr.push(e) : null
    })

    return finalArr
}

var output = removeElement([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [1, 3, 1]
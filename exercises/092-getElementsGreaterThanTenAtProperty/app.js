// Write your function here
function getElementsGreaterThan10AtProperty(obj, key){
    let numArr = []
    let finalArr = []

    numArr = obj[key]
    
    numArr.forEach(e=>{
        if(e > 10){
            finalArr.push(e)    
        }
    })

    return finalArr
}

var obj = {
    key: [1, 20, 30]
};

var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]
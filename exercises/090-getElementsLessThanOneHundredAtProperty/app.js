// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    let objArr = obj[key]
    let finalArr = []

    objArr.forEach(e=>{
        e < 100 ? finalArr.push(e) : null
    })

    return finalArr
}

var obj = {
    key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
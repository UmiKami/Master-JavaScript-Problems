var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
        return 0
    }

    let arr = obj[key]
    let sum = 0
    arr.forEach(e=>{
        sum += e
    })

    return sum
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
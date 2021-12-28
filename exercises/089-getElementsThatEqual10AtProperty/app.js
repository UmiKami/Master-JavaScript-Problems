// Write your function here
function getElementsThatEqual10AtProperty(object, key){
    let objArr = object[key]
    let arr = []
    
    objArr.forEach(e => {
        e == 10 ? arr.push(e) : null        
    })

    return arr
}

var obj = {
    key: [1000, 10, 50, 10]
};

var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]
 var obj = {
 key: []
};
function getElementOfArrayProperty(obj, key, index) {
    // your code here
    if(!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])){
        return undefined
    }

    return obj[key][index]
}

var output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
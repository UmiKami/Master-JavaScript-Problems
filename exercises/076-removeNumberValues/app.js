var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    for(let property in obj){
        typeof obj[property] == "number" ? delete obj[property] : null
    }

    return obj
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    for(let property in obj){
        obj[property] < num ? delete obj[property] : undefined
    }

    return obj
}

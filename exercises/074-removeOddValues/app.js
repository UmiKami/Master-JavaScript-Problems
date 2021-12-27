function removeOddValues(obj) {
    // your code here
    for(let property in obj){
        obj[property] % 2 != 0 ? delete obj[property] : null
    }

    return obj
}
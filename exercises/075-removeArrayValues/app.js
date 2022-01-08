function removeArrayValues(obj) {
    // your code here
    for(let property in obj){
       Array.isArray(obj[property]) ? delete obj[property] : undefined
    }

    return obj
}
function removeStringValues(obj) {
    // your code here
    for(let property in obj){
        typeof obj[property] == "string" ? delete obj[property] : undefined
    }

    return obj
}

var obj = {
    name: 'Sam',
    age: 20
}


removeStringValues(obj);
console.log(obj); // { age: 20 }
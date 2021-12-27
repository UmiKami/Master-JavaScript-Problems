function removeStringValuesLongerThan(num, obj) {
    // your code here

    for(let property in obj){
        if(typeof obj[property] == "string"){
            obj[property].length > num ? delete obj[property] : undefined
        }
    }

    return obj
}

var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };
  removeStringValuesLongerThan(6, obj);
  console.log(obj); // { age: 20, location: 'Texas' }

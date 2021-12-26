function getProperty(obj, key) {
  // your code here
  /*Debug start
  console.log("Passed value of obj at function: " + obj);
  console.log("Passed value of key at function: " + key);
  console.log("Combined value of obj + key: " + obj[key]);
  console.log("Combined value of obj + actual name [model]: " + obj.model);
  Debug end*/

  return obj[key]
}


let car = {
  model: 'Toyota'
}

var output = getProperty(car, 'model');
console.log("Final output:" + output);
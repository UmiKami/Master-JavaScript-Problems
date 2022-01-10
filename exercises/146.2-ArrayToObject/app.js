function fromListToObject(array) {
  // your code here
  let obj = new Object()

  array.forEach(e=>{
    obj[e[0]] = e[1]
  })


  return obj
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }
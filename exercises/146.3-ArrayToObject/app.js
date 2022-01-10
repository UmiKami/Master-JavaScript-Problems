function transformEmployeeData(array) {
  // your code here
  let objArr = []

  array.forEach(e=>{
    let obj = {}
    e.forEach(i=>{
      obj[i[0]] = i[1]
      
      e.indexOf(i) == e.length - 1 ? objArr.push(obj) : null
    })
  })


  return objArr
}

console.log(transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk'], ['tshirtSize', 'L']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']],[['firstName', 'Pepe'], ['lastName', 'Jen'], ['age', 35], ['role', 'developer']]]));
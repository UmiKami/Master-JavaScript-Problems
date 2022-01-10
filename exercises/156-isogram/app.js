function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  
  let strArr = text.split("")
  let isIsogram = true

  strArr.forEach(e=>{
    for(let i = strArr.indexOf(e) + 1; i < strArr.length; i++){
      // console.log(`e = ${e} and strArr[i] = ${strArr[i]}`);
      if(e == strArr[i]){
        isIsogram = false
      }
    }
  })

  return isIsogram
}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false
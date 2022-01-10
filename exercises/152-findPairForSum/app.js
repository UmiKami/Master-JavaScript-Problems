function findPairForSum(array, number){

  let sum = 0
  let arr = [] 

  array.forEach(e=>{
      for(let i = 1; i < array.length; i++){
        sum = e + i

        if(sum == number){ arr.push(e,i); }
      }
  })

  let finalArr = arr.slice(0,2)
  
  return finalArr
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 7);
console.log(pair); // --> [4, 5]
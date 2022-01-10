function detectOutlierValue(string) {
    // your code here
    let strArr = string.split(" ")
    let evenCounter = 0
    let oddCounter = 0
    let evenArr = []
    let oddArr = []

    // console.log(strArr);

    strArr.forEach(e=>{
        let num = parseInt(e)

        // console.log(num);

        if(num % 2 == 0){
            evenCounter++
            evenArr.push([e, strArr.indexOf(e)])
        }
        
        else if(num % 2 != 0){
            oddCounter++
            oddArr.push([e, strArr.indexOf(e)])
        }
    })

    return evenArr.length > oddArr.length ? oddArr[0][1] + 1 :  evenArr[0][1] + 1

}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2
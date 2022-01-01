// Write your function here
function computeAverageOfNumbers(arr){
    let holder = 0

    arr.forEach(e=>{
        holder += e
    })

    return holder / arr.length
}
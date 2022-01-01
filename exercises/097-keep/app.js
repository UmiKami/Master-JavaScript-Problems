// Write your function here
function keep(arr, keeper){
    let finalArr = []

    arr.forEach(e=>{
        e == keeper ? finalArr.push(e) : null
    })

    return finalArr
}
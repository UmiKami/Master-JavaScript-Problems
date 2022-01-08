// Write your function here
function getOddLengthWordsAtProperty(obj, key){
    let finalArr = []

    obj[key].forEach(e=>{
        e.length % 2 != 0 ? finalArr.push(e) : null
    })

    return finalArr
}

 function filterOddLengthWords(words) {
    // your code here
    let finalArr = []

    words.forEach(e=>{
        e.length % 2 != 0 ? finalArr.push(e) : null
    })

    return finalArr
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']
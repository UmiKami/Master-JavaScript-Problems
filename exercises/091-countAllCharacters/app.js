// Write your function here

function countAllCharacters(word){
    let charObj = new Object()

    for(let i = 0; i < word.length; i++){
        var re = new RegExp(word[i], 'g');
        charObj[word[i]] = word.match(re).length
    }

    return charObj
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
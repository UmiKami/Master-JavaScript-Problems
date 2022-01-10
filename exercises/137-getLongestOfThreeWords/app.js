function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let arr = [word1, word2, word3]
    let newArr = arr.sort(function(a,b){return a-b})

    return newArr[0].length == newArr[1].length || newArr[0].length == newArr[2].length ? newArr[0] : newArr[1].length == newArr[2].length ? newArr[1] : newArr[2]
}

var output = getLongestOfThreeWords('these', 'three', 'words', 'tigers');
console.log(output); // --> 'these'
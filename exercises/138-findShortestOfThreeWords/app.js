function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let arr = [word1, word2, word3]
    let sortedArr = arr.sort((a,b)=>{return a-b})

    return sortedArr[0]
}
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
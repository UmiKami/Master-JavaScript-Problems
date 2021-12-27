// Write your function here

function findMinLengthOfThreeWords(word1, word2, word3){
    if(word1.length < word2.length && word1.length < .lenth){
        return word1
    }else if(word2.length < word1.length && word2.length < word3.lenth){
        return word2
    }else{
        return word3
    }
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
function countCharacter(str, char) {
    // your code here
    var re = new RegExp(char, 'g');
    foundCharArr = str.match(re)
    return foundCharArr.length
}

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
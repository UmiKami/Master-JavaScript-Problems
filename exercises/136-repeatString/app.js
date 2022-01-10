function repeatString(string, num) {
    // your code here
    str = string
    while(num > 1){
        string += str
        num--
    }

    return string
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
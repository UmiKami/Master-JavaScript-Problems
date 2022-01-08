function getStringLength(string) {
    // your code here
    let str = string.split("")
    let index = 0

    while(true){
        if(str[index] == undefined){
            return index
        }

        index++
    }
}

var output = getStringLength('hello');
console.log(output); // --> 5
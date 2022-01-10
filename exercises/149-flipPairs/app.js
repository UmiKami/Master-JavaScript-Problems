function flipPairs(input){
    // your code here
    let str = input.split("")
    let reverse = []

    console.log(str);

    str.forEach(e=>{
        let splitStr = str.split('')
        reverse.push(splitStr.reverse().join(""))
    })

    return reverse
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

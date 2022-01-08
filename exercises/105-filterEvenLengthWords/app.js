function filterEvenLengthWords(words) {
    // your code here
     let finalArr = []

     words.forEach(e=>{
         e.length % 2 == 0 ? finalArr.push(e) : null
     })

     return finalArr
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
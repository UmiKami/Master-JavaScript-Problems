function getAllElementsButNth(array, n) {
    // Write your function here
    newArr = []
    for (let index = 0; index < array.length; index++) {
        if(index == n){
            continue
        }else{
            newArr.push(array[index])
        }
    }

    return newArr
}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
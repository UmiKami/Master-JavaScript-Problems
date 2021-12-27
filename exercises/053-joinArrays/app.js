function joinArrays(arr1, arr2) {
  // your code here
  arr2.forEach(e => {
    arr1.push(e)
  })

  return arr1
}